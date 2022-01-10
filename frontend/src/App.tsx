import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FollowersPage } from "./components/Pages/FollowesPage";
import { FollowingsPage } from "./components/Pages/FollowingsPage";
import { HomesPage } from "./components/Pages/HomesPage";
import { SigninPage } from "./components/Pages/SigninPage";
import { SignupPage } from "./components/Pages/SignupPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomesPage />} />
        <Route path="/followings" element={<FollowingsPage />} />
        <Route path="/followers" element={<FollowersPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
};
