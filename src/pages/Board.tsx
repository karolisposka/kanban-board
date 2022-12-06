import React, { useContext, useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import { dataContext } from "../context";
import { useParams } from "react-router-dom";
import {column} from '../models';
import List from "../components/list/List";
import Container from '../components/container/Container';
import Loader from '../components/loader/Loader';
import NoData from "../components/noData/NoData";

const Board = () => {
  const path = useParams();
  const board = Number(path.page);
  const [query] = useContext(dataContext);
  const [column, setColumn] = useState<column>();

  const hasLength = (arr: any[]): boolean => {
    return arr && arr.length !== 0
  }

  useEffect(()=>{
    if(query.length !== 0){
      setColumn(query.boards.filter(board => board.name === 'Platform Launch'));
    } 
  },[query])


  return (
    <Container style={{
      minHeight: 'calc(100vh - 67px)',
      width: '100%',
      display: 'flex',
      alignItems:'center',
      justifyContent:'center',
      padding:'0 1rem',
    }}>
      {column
         ?
        <List list={column[0].columns}/> 
        :
        <Loader/>
      }
        <Outlet/>
    </Container>
  );
};

export default Board;
