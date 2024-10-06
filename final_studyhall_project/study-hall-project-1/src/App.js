import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignupPage from './pages/LoginSignupPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import DetailsPage from './pages/DetailsPage';
import PaymentPage from './pages/PaymentPage';
import HistoryPage from './pages/HistoryPage';
import Home from './components/home';
import OwnerDashboard from './components/OwnerDashboard'
import Analytics from './components/Analytics';
import DataPage from './pages/DataPage';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" component={LoginSignupPage} /> */}
        {/* <Route path="/register" component={RegisterPage} /> */}
        {/* <Route path="/dashboard" component={DashboardPage} /> */}
        {/* <Route path="/details/:id" component={DetailsPage} /> */}
        <Route path="/payment" element={<PaymentPage/>} />
        {/* <Route path="/history" component={HistoryPage} /> */}
        <Route path="/" element={<LoginSignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin-dashboard" element={<OwnerDashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/data" element={<DataPage />} />

      </Routes>
    </Router>
  );
}

export default App;
