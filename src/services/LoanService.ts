const API_BASE_URL = "http://localhost:8080";

export const getAllLoans = async () =>
  fetch(`${API_BASE_URL}/api/loans`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

export const getAllUserLoans = async (userId: number) =>
  fetch(`${API_BASE_URL}/api/loans/user/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
