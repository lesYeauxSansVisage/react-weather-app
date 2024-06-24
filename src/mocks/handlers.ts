import { http, HttpResponse } from "msw";
import { apiMockResponse } from "./context-mocks";

export const handlers = [
  http.get("https://api.weatherapi.com/v1/forecast.json", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    if (q === "maranguape") {
      return HttpResponse.json(apiMockResponse);
    }
  }),
];
