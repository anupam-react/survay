import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import PrivateRoutes from "./utiils/PrivateRoutes";
import Dashboard from "./components/Dashboard";
import MemberList from "./components/MemberList";
import Banner from "./components/Banner";
import BannerForm from "./components/Banner/BannerForm";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/memberList" element={<MemberList />} />
          <Route path="/banners" element={<Banner />} />
          <Route path="/new-banner" element={<BannerForm isEdit={false} />} />
          <Route path="/banner/:id" element={<BannerForm isEdit={true} />} />
        </Route>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
