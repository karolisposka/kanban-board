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
  return (
    <S.Column className={className}>
        <S.TitleWrapper>
          <S.Dot/>
          <S.ColumnName>{name}
            <S.Span>({tasks.length})</S.Span>
          </S.ColumnName>
        </S.TitleWrapper>
        <S.TasksList>
            {tasks && tasks.map((task,index) => (
                <ColumnCard key={index} 
                handleClick={()=>{
                  navigate(`task/${index}`)
                }}
                title={task.title}
                subtasks={task.subtasks.length}
                subtasksCompleted={task.subtasks.filter(task => task.isCompleted === true).length}
                />
            ))}
        </S.TasksList>
    </S.Column>
  )
}

export default Column