import { createSelector } from 'reselect';

const boardMessage = (state: any) => state.board.message;
const userMessage = (state: any) => state.user.message;

export const errorsSelector = createSelector(boardMessage, userMessage, (board, user) => {
  return [board, user];
});
