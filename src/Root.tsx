import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
