import { DndProvider } from "react-dnd";
import { Toaster } from "@/components/ui/sonner";
import { HTML5Backend } from "react-dnd-html5-backend";

import Dashboard from "./pages/dashboard/dashboard";
import Preview from "./pages/preview/preview";
import { ThemeProvider } from "./components/provider/theme";
import Marketing from "./pages/marketing/marketing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
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
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={router} />
        <Toaster />
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
