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
import Archives from './routes/Archives/archives';
import Dashboard from './routes/Dashboard/dashboard';
import FlowConstructor from './routes/FlowConstructor/flowconstructor';

import {LoginPage} from './routes/login';


export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route

          path="/View"
          element={
            <RequireAuth>
              <Archives />
            </RequireAuth>
          }
        />
         
        <Route
          path="/Constructor"
          element={
            <RequireAuth>
              <FlowConstructor />
            </RequireAuth>
          }
        />
        

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
