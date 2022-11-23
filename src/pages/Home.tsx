import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../context";
import MainContainer from '../components/mainContainer/MainContainer';
import NoData from '../components/noData/NoData';

const Home = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
        <NoData 
        click={()=>{
          navigate('/new');
        }}/>  
        <Outlet/>
    </MainContainer>
  );
};

export default Home;
