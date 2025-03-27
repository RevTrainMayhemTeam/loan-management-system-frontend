/* eslint-disable @typescript-eslint/no-explicit-any */
const API_BASE_URL = "http://localhost:8080";

export const updateUserInfo = async (user: any) =>{
    return fetch(`${API_BASE_URL}/api/users/${user.id}`, {
        method: "PUT",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(user),
        credentials: "include",
    });
};