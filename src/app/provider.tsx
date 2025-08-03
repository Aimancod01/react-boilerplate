import { Suspense, type FC, type ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MainErrorFallback } from "../components/errors/main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ProviderProp = {
  children: ReactNode;
};

export const AppProvider: FC<ProviderProp> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <Suspense fallback={<p>loading...</p>}>
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
