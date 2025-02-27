import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/Home";

const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />} />
         </Routes>
      </BrowserRouter>
   );
};
export default AppRoutes;
