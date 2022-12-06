import React from 'react';
import * as S from './Column.styles';
import { useNavigate } from 'react-router-dom';
import {task} from '../../models';
import ColumnCard from '../columnCard/ColumnCard';

type props = {
    name: string,
    tasks: task[],
    className?:string

}

const Column = ({name, tasks, className}:props) => {
  const navigate = useNavigate();
  console.log(tasks);
  
  return (
    <S.Column className={className}>
        <S.TitleWrapper>
          <S.Dot/>
          <S.ColumnName>{name}
            <S.Span>({tasks && tasks.length})</S.Span>
          </S.ColumnName>
        </S.TitleWrapper>
        <S.TasksList>
            {tasks.length > 0 ? tasks.map((task,index) => (
                <ColumnCard key={index} 
                handleClick={()=>{
                  navigate(`task/${index}`)
                }}
                title={task.title}
                subtasks={task.subtasks.length}
                subtasksCompleted={task.subtasks.filter(task => task.isCompleted === true).length}
                />
            )) : <S.Nodata>no entries</S.Nodata>}
        </S.TasksList>
    </S.Column>
  )
}

export default Column