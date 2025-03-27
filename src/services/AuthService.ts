/* eslint-disable @typescript-eslint/no-explicit-any */
const API_BASE_URL = "http://localhost:9898";

export const loginUser = async (user: any) =>
  fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
    credentials: "include",
  });

export const registerUser = async (user: any) =>
  fetch(`${API_BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
    credentials: "include",
  });

export const logoutUser = async () =>
  fetch(`${API_BASE_URL}/api/auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

export const checkUserSession = async () =>
  fetch(`${API_BASE_URL}/api/auth/session-check`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
