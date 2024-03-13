import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';
import LandingPage from '../pages/LandingPage';
import LoginHandler from '../pages/LoginHandler';
import Header from '../layouts/Header';

const BaseLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/login/oauth2/callback/kakao" element={<LoginHandler />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseLayout;
