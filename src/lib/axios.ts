import axios, { AxiosRequestHeaders } from "axios";

export const axiosClient = axios.create({});

export const axiosAuthenticatedClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

let session: { token: string; scope: string; expires_at: number } | null = null;

axiosAuthenticatedClient.interceptors.request.use(async (config) => {
  if (!session?.token || session.expires_at * 1000 < Date.now()) {
    session = await axios.get("/auth/access-token").then((res) => res.data);
  }

  config.headers ??= {} as AxiosRequestHeaders;
  if (session) config.headers.Authorization = "Bearer " + session?.token;

  return config;
});
