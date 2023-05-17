import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const RootBody = tw.div`
max-w-lg
mx-auto
h-full
`;
const Root = () => {
  return (
    <RootBody>
      <Header />
      <Outlet />
    </RootBody>
  );
};

export default Root;
