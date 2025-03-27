const API_BASE_URL = "http://localhost:8080";

export const getAllLoans = async () =>
  fetch(`${API_BASE_URL}/api/loans`, {
    method:"GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })