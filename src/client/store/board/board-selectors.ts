import { RootState } from "..";

export const selectBoard = (state: RootState) => state.board.board;

export const selectPlayerOption = (state: RootState) => state.board.playerOption;

export const selectColumnIsFull = (columnIndex: number) => (state: RootState) => {
	const board = selectBoard(state);
	return board[0][columnIndex] !== false;
};
