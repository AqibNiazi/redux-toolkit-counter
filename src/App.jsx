import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {isAuth ? <Counter /> : <Auth />}
    </>
  );
}

export default App;
