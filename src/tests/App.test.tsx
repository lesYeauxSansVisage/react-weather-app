import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import App from "../App";
import { server } from "../mocks/server";
import { HttpResponse, http } from "msw";

it("should not show weather when submitting an empty form", async () => {
  const user = userEvent.setup();
  render(<App />);

  const cityInput = screen.getByPlaceholderText("Insira aqui o nome da cidade");

  await user.clear(cityInput);

  const submitButton = screen.getByRole("button", {
    name: "search-submit-button",
  });

  await user.click(submitButton);

  const weatherInfo = screen.queryByLabelText("weather-info");

  expect(weatherInfo).not.toBeInTheDocument();
});

it("should search for weather when submitting a valid form", async () => {
  const user = userEvent.setup();
  render(<App />);

  const cityInput = screen.getByPlaceholderText("Insira aqui o nome da cidade");

  await user.clear(cityInput);
  await user.type(cityInput, "maranguape");

  const submitButton = screen.getByRole("button", {
    name: "search-submit-button",
  });

  await user.click(submitButton);

  const weatherInfo = await screen.findByLabelText("weather-info");

  expect(weatherInfo).toBeInTheDocument();
});

it("should show the error popup if the search request fails", async () => {
  server.use(
    http.get("https://api.weatherapi.com/v1/forecast.json", ({ request }) => {
      const url = new URL(request.url);
      const q = url.searchParams.get("q");
      if (q === "maranguape") {
        return new HttpResponse(null, { status: 500 });
      }
    })
  );

  const user = userEvent.setup();

  render(<App />);

  const cityInput = screen.getByPlaceholderText("Insira aqui o nome da cidade");

  await user.clear(cityInput);
  await user.type(cityInput, "maranguape");

  const submitButton = screen.getByRole("button", {
    name: "search-submit-button",
  });

  await user.click(submitButton);

  const error = await screen.findByText(
    "Desculpa, não conseguimos achar o clima para a cidade que você procurou."
  );

  expect(error).toBeInTheDocument();
});
