import { HomesPage } from "./components/Pages/HomesPage";
import { FollowingsPage } from "./components/Pages/FollowingsPage";
import { FollowersPage } from "./components/Pages/FollowesPage";
import { SigninPage } from "./components/Pages/SigninPage";
import { SignupPage } from "./components/Pages/SignupPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
