import React from "react";
import {Outlet} from 'react-router-dom';

const Test = () => {
  return (
    <>
      <div>test</div>
      <Outlet/>
    </>
  );
};

export default Test;
