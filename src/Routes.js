import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contatos from "./pages/Contatos";
import Home from "./pages/Home";
import Apoie from "./pages/Apoie";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/doe" Component={Apoie} />
        <Route path="/contatos" Component={Contatos} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
