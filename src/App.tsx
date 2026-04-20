import React from "react";
import type { JSX } from "react";
import Hero from "./pages/Hero";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/authentication/LoginForm";

const App = (): JSX.Element => {
  return (
    <div className="w-screen h-screen px-4 md:px-20 py-4 ">
      <Routes>
        <Route index element={<Hero />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default App;
