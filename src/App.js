import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MainPage from './pages/main/MainPage';
import PixyCustom from './pages/main/PixyCustom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/main/*" element={<PrivateRoute><MainPage /></PrivateRoute>}/>
            <Route path="/pixycustom" element={<PixyCustom />}/>
            {/* 다른 라우트들 */}
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;