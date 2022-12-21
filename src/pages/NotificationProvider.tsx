import React, { useReducer, useEffect } from 'react';
import { useAppSelector } from '../hooks';
import Styled from 'styled-components';
import uuid from 'react-uuid';
import Notification from '../components/notification/Notification';

const initialState: string[] = [];

type props = {
  children: React.ReactNode;
};

type notification = {
  id: string;
  status: string;
  message: string;
};

const NotificationsWrapper = Styled.section`
position:fixed;
  top:10px;
  right:20px;
  width:300px;
  z-index: 99;
`;

const NotificationProvider = ({ children }: props) => {
  const userError = useAppSelector((state) => state.user.message);
  const boardError = useAppSelector((state) => state.board.message);

  const addError = (message: string) => {
    if (message) {
      dispatch({
        type: 'add',
        payload: {
          id: uuid(),
          message: Object.values(message),
          status: Object.keys(message).toString(),
        },
      });
    }
  };

  useEffect(() => {
    if (userError) {
      return addError(userError);
    }
  }, [userError]);

  useEffect(() => {
    if (boardError) {
      return addError(boardError);
    }
  }, [boardError]);

  function reducer(state: notification[], action: any) {
    switch (action.type) {
      case 'add':
        return [...state, action.payload];
      case 'remove':
        return [...state.filter((item) => item.id !== action.payload)];
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <NotificationsWrapper>
        {state &&
          state.map((notification) => (
            <Notification
              key={notification.id}
              id={notification.id}
              type={notification.status}
              {...notification}
              dispatch={dispatch}
            />
          ))}
      </NotificationsWrapper>
      {children}
    </div>
  );
};

export default NotificationProvider;
