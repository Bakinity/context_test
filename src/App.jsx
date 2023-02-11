import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home, Test } from "./Pages";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='app' element={<Outlet />} />
        <Route index element={<Home />} />
        <Route path='test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
