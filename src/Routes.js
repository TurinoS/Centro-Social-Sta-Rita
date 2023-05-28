import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contatos from "./pages/Contatos";
import Home from "./pages/Home";
import Apoie from "./pages/Apoie";
import About from "./pages/About";
import Eventos from "./pages/Eventos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/events" Component={Eventos} />
        <Route path="/doe" Component={Apoie} />
        <Route path="/contatos" Component={Contatos} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
