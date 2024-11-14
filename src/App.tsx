import { DndProvider } from "react-dnd";
import { Toaster } from "@/components/ui/sonner";
import { HTML5Backend } from "react-dnd-html5-backend";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Preview from "./pages/preview/preview";
import Dashboard from "./pages/dashboard/dashboard";
import Marketing from "./pages/marketing/marketing";
import { ThemeProvider } from "./components/provider/theme";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Marketing />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/preview",
      element: <Preview />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DndProvider backend={HTML5Backend}>
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
        <Toaster />
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
