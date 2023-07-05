import { Route, Routes } from "react-router-dom";
import Login from '../pages/Login';
import FormPage from "../pages/FormPage";

const CustomRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<FormPage />} />
    </Routes>
    </>
  )
}

export default CustomRoutes