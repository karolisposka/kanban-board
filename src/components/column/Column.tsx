import React from 'react';
import * as S from './Column.styles';
import { useNavigate } from 'react-router-dom';
import { task } from '../../models';
import ColumnCard from '../columnCard/ColumnCard';

type props = {
  name: string;
  tasks: task[];
  className?: string;
  sequence?: number;
};

const Column = ({ name, sequence, tasks, className }: props) => {
  const navigate = useNavigate();
  const getTaskName = (arr: task): string => {
    const newObj: any = arr;
    return newObj.name;
  };

  const arrayOfColors: string[] = ['#49C4E5', '#8471F2', '#67E2AE', '#e2ae67', '#e2679b', 'blue'];

  return (
    <S.Column className={className}>
      <S.TitleWrapper>
        <S.Dot color={arrayOfColors[sequence!]} />
        <S.ColumnName>
          {name}
          <S.Span>({tasks ? tasks.length : '0'})</S.Span>
        </S.ColumnName>
      </S.TitleWrapper>
      <S.TasksList>
        {tasks && tasks.length > 0 ? (
          tasks.map((task: task, index) => (
            <ColumnCard
              key={index}
              handleClick={() => {
                navigate(`${name}/task/${getTaskName(task)}`);
              }}
              name={getTaskName(task)}
              subtasks={task.subtasks.length}
              subtasksCompleted={task.subtasks.filter((task) => task.isCompleted === true).length}
            />
          ))
        ) : (
          <S.Nodata>no entries</S.Nodata>
        )}
      </S.TasksList>
    </S.Column>
  );
};

export default Column;
