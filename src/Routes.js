import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contatos from "./pages/Contatos";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/contatos" Component={Contatos} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
