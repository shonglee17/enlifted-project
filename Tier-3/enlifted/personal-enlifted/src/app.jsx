import * as React from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import {AuthProvider, useAuth} from './auth';
import Dashboard from './routes/Dashboard/dashboard';
import {LoginPage} from './routes/login';
//tou
import About from './About/About';
// import Nav from './Nav/Nav.jsx';// will not work
// import { Box, Typography } from '@mui/material';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard path/>
            </RequireAuth>
          }
        />
        <Route path='/about' element={<About />}/>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AuthProvider>
  );
}

function RequireAuth({children}) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{from: location}} replace />;
  }

  return children;
}
