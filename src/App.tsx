// App.tsx
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { UBHeader } from "./components/UBHeader/UBHeader";
import { Loader } from "./common/Loader/Loader";
import DefaultLayout from "./layout/DefaultLayout";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Settings } from "./pages/Settings/Settings";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {/* Login page should be outside of the DefaultLayout */}
      <Route path="/login" element={<Login />} />

      {/* Other routes inside the DefaultLayout */}
      <Route
        path="*"
        element={
          <DefaultLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Settings" element={<Settings/>}/>
            </Routes>
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default App;