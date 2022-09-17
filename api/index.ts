import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  timeout: 10000,
  headers: {
    Authorization: `Bearer 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`,
  },
});
