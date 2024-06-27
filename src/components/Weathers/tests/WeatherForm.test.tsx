import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import WeatherForm from "../WeatherForm";
import userEvent from "@testing-library/user-event";
import classes from "../WeatherForm.module.scss";

it("form should have error class if input is empty", async () => {
  const user = userEvent.setup();
  render(<WeatherForm />);

  const input = screen.getByPlaceholderText("Insira aqui o nome da cidade");
  const form = screen.getByRole("form", { name: "city-search-form" });

  expect(form).not.toHaveClass(classes["error"]);

  await user.clear(input);

  const submitButton = screen.getByRole("button", {
    name: "search-submit-button",
  });

  await user.click(submitButton);

  expect(form).toHaveClass(classes["error"]);
});

it("form should remove error class if input is valid", async () => {
  const user = userEvent.setup();
  render(<WeatherForm />);

  const input = screen.getByPlaceholderText("Insira aqui o nome da cidade");
  const form = screen.getByRole("form", { name: "city-search-form" });

  expect(form).not.toHaveClass(classes["error"]);

  await user.clear(input);

  const submitButton = screen.getByRole("button", {
    name: "search-submit-button",
  });

  await user.click(submitButton);

  expect(form).toHaveClass(classes["error"]);

  await user.clear(input);
  await user.type(input, "a");

  expect(form).not.toHaveClass(classes["error"]);
});
