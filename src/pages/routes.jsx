import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Produtos from "./produtos";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Produtos />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
