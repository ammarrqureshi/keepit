import { Box } from "@radix-ui/themes";
import { Navbar } from "@components/Navbar";
import { Sidebar } from "@/components/drawer/Sidebar";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { Home } from "./pages/Home";
import { AddNotebook } from "./components/notebook/AddNotebook";
function App() {
  return (
    <>
      <SidebarProvider>
        <Sidebar></Sidebar>
        <Box px="2">
          <Navbar></Navbar>
          <Home></Home>
        </Box>
        <AddNotebook />
      </SidebarProvider>
    </>
  );
}

export default App;
