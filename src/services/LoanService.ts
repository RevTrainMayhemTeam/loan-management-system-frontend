const API_BASE_URL = "http://localhost:9898/api";

export const getLoans = async (userId:number) => {
  
  
  return fetch(`${API_BASE_URL}/loans/user/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
};

export const createLoan = async (loan: any) => {
  return fetch(`${API_BASE_URL}/loans`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loan),
    credentials: "include",
  });
};
