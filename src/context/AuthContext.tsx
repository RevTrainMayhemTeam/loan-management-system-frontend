/**
 * useContext is a React hook that allows us to share data (like user info)
 * across the entire component tree, without manually passing props at every level.
 * We create a context (AuthContext) and a provider (AuthProvider).
 */

import { createContext, useState } from "react";
import { loginUser, registerUser, logoutUser, checkUserSession } from "../services/AuthService";
import { updateUserInfo } from "../services/UserService";
import { User } from "../models/User";

// A type to to represent our context
interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email:string, password:string,firstName: string,
      lastName: string,
      phoneNumber: string ) => Promise<void>;
    logout: () => Promise<void>;
    checkSession: () => Promise<boolean>;
    updateUser: (updatedUser: User) => Promise<void>;
}

// 1) Create a new context with an initial value of null
export const AuthContext = createContext<AuthContextType | null>(null);
// 2 - create a provider
// React.ReactNode - This type can represent anything React can render: strings, numbers, elements, fragments, portals, etc.
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  /**
   * user: holds the logged-in user's data
   * setUser: a function to update the user state
   */
  const [user, setUser] = useState<User | null>(null);

  /**
   * login: an async function that calls 'loginUser' (our auth service).
   * If successful, we parse the JSON response and store the user data in 'user' using 'setUser'.
   */

  // Centralized login logic—call your user service, update the context
  const login = async (email: string, password: string) => {
    const response = await loginUser({ email, password });
    if (response.ok) {
      const userData = await response.json();
      setUser(userData);
    }
  };

  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string
  ) => {
    const response = await registerUser({
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
    })
    if(response.ok){
      const userData = await response.json();
      setUser(userData);
    }
  };

  const logout = async () => {
    const response = await logoutUser();
    if(response.ok){
      setUser(null);
    }
  }

  const checkSession = async () => {
    const response = await checkUserSession();
    if(response.ok){
      const userData = await response.json();
      setUser(userData);
      return true;
    } else {
      setUser(null);
      return false;
    }
  }

  const updateUser = async(updatedUser: User) => {
    const response = await updateUserInfo(updatedUser);
    if(response.ok){
      const userData = await response.json();
      setUser(userData);
    }
  }

  /**
   * We wrap our app (children) in AuthContext.Provider,
   * passing { user, login } as the value.
   * Any child component can now use useContext(AuthContext)
   * to access or update user data (through login).
   */
  return (
    <AuthContext.Provider value={{ user, login, register, logout, checkSession, updateUser}}>
      {children}
    </AuthContext.Provider>
  );
};

// Export the context itself for direct usage in child components
export default AuthContext;

/**
 *  How to use:
 *   1) Wrap your <App /> in <AuthProvider> ... </AuthProvider>
 *   2) In any child, call `const { user, login } = useContext(AuthContext)` to access/modify data.
 */
