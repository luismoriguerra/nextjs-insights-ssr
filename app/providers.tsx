"use client";

// import { ThemeProvider } from "next-themes";
import { CubeProvider } from "@cubejs-client/react";
import { cubejsApi } from "./libs/cube-api";
export default function Providers({ children }: { children: React.ReactNode }) {
  return <CubeProvider cubejsApi={cubejsApi}>{children}</CubeProvider>;
}
