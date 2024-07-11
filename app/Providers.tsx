// "use client";
// import {SessionProvider} from "next-auth/react";

// export const AuthProvider=({children})=>{
//     return <SessionProvider>{children}</SessionProvider>;
// };
"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
