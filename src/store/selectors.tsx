import { createSelector } from 'reselect';

const boardMessage = (state) => state.board.message;
const userMessage = (state) => state.user.message;

export const errorsSelector = createSelector(boardMessage, userMessage, (board, user) => {
  return [board, user];
});
