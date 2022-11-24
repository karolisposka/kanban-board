import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { dataContext } from "../context";
import List from "../components/list/List";
import Container from '../components/container/Container';
import Loader from '../components/loader/Loader';

const Board = () => {
  const [data] = useContext(dataContext);
  return (
    <Container style={{
      minHeight: 'calc(100vh - 67px)',
      width: '100%',
      display: 'flex',
      alignItems:'center',
      justifyContent:'center',
      padding:'0 1rem'
    }}>
      {data
         ?
        <List list={data.boards[0].columns}/> 
        :
        <Loader/>
      }
        <Outlet/>
    </Container>
  );
};

export default Board;
