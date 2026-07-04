import MainLayout from "./layouts/MainLayout";
import Home from "./pages/publish/Home";
import About from "./pages/publish/About";

function App() {
  return (
    <MainLayout>
      <Home />
      <About />
    </MainLayout>
  );
}

export default App;
