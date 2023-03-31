import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import type { PropsWithChildren } from "react";
import { queryClient } from "../../api";

const QueryClientContainer = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientContainer;
