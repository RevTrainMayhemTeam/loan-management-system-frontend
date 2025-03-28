/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "../models/User";

const API_BASE_URL = "http://localhost:8080";

export const getAllUsers = async () =>
  fetch(`${API_BASE_URL}/api/users`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

export const updateUserInfo = async (userId:number, user:any) =>
  fetch(`${API_BASE_URL}/api/users/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
    credentials: "include",
  });
