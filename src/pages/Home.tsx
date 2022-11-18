import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { dataContext } from "../context";
import List from '../components/list/List';
import MainContainer from '../components/mainContainer/MainContainer';
import NoData from '../components/noData/NoData';

const Home = () => {
 const [data] = useContext(dataContext);

  return (
    <MainContainer>
        {data === 0 ? 
        <NoData/>
          :
        <Outlet/>
        }
    </MainContainer>
  );
};

export default Home;
