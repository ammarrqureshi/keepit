import { Sidebar } from "@/components/drawer/Sidebar";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { Navbar } from "@components/Navbar";
import { Box, Container } from "@radix-ui/themes";
import { AddNotebook } from "./components/notebook/AddNotebook";
import { Notebooks } from "./pages/Notebooks";
function App() {
  return (
    <>
      <SidebarProvider>
        <Sidebar></Sidebar>
        <Box px="2">
          <Navbar></Navbar>
          <Container size="4">
            <Notebooks></Notebooks>
          </Container>
        </Box>
        <AddNotebook />
      </SidebarProvider>
    </>
  );
}

export default App;
