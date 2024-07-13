import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header, LoadingSpinner } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen w-screen overflow-auto flex flex-wrap content-between bg-[#F6F5F5]">
      <div className="w-full block">
        <Header />
        <main className="min-h-[90vh]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <h1>
      <LoadingSpinner />
    </h1>
  );
}

export default App;
