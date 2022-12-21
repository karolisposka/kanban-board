import React, { useState, useEffect, useRef } from 'react';
import * as S from './Notification.styles';

type props = {
  message: string;
  type: string;
  dispatch: any;
  id: string;
};
const Notification = ({ message, type, id, dispatch }: props) => {
  const progress = useRef<NodeJS.Timer | null>(null);
  const [exit, setExit] = useState<boolean>(false);
  const [width, setWidth] = useState<any>(0);
  const [run, setRun] = useState<boolean>(true);

  useEffect(() => {
    if (run) {
      if (progress.current) {
        clearInterval(progress.current);
      }
      progress.current = setInterval(() => {
        if (width !== 100) {
          setWidth((prev: number) => {
            if (prev < 100) {
              return prev + 0.5;
            }
          });
        }
      }, 20);
    } else {
      if (progress.current) {
        clearInterval(progress.current);
      }
    }
  }, [run]);

  const handleExit = () => {
    setExit(true);
    setTimeout(() => {
      dispatch({ type: 'remove', payload: id });
    }, 400);
  };

  useEffect(() => {
    if (width === 100) {
      handleExit();
    }
  }, [width]);

  return (
    <S.NotificationItem
      exit={exit}
      onMouseEnter={() => {
        setRun(false);
      }}
      onMouseLeave={() => {
        setRun(true);
      }}
    >
      <S.Button
        onClick={() => {
          handleExit();
        }}
      >
        <S.Icon />
      </S.Button>
      <S.ItemMessage>{message}</S.ItemMessage>
      <S.ProgressBar type={type} style={{ width: `${width}%` }} />
    </S.NotificationItem>
  );
};

export default Notification;
