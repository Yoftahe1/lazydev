import { DndProvider } from "react-dnd";
import { Toaster } from "@/components/ui/sonner";
import { HTML5Backend } from "react-dnd-html5-backend";

import Dashboard from "./pages/dashboard/dashboard";
import { ThemeProvider } from "./components/provider/theme";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DndProvider backend={HTML5Backend}>
        <Dashboard />
        <Toaster />
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
