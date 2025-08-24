import { Suspense, type FC, type ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MainErrorFallback } from "../components/errors/main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Spinner } from "../components/ui/loader/spinner";
import { Toaster } from "react-hot-toast";
type ProviderProp = {
  children: ReactNode;
};

export const AppProvider: FC<ProviderProp> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster position="top-center" />
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
