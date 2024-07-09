import { createZodFetcher } from "zod-fetch";

const api = {
  get: createZodFetcher((url: URL | RequestInfo, config: RequestInit = {}) =>
    fetch(url, {
      method: "GET",
      ...config,
    }).then((res) => res.json())
  ),
};

export default api;
