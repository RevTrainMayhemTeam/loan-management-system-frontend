const API_BASE_URL = "http://localhost:8080";

export const getAllUsers = async () =>
  fetch(`${API_BASE_URL}/api/users`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
