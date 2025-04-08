/* eslint-disable @typescript-eslint/no-explicit-any */

const API_BASE_URL = "http://54.144.224.97:8080";

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

export const createLoan = async (loan: any) =>
  fetch(`${API_BASE_URL}/api/loans`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loan),
    credentials: "include",
  });

export const updateLoan = async (loanId: number, updatedLoan: any) =>
  fetch(`${API_BASE_URL}/api/loans/${loanId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedLoan),
    credentials: "include",
  });

export const approveLoan = async (loanId: number) =>
  fetch(`${API_BASE_URL}/api/loans/${loanId}/approve`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

export const rejectLoan = async (loanId: number) =>
  fetch(`${API_BASE_URL}/api/loans/${loanId}/reject`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

export const getTypes = async () =>
  fetch(`${API_BASE_URL}/api/loan-types`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
