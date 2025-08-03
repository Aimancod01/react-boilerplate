import type { FC } from "react";
import { AppProvider } from "./provider";
import AppRouter from "./router";

const App: FC = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
