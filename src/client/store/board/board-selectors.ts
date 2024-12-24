import { Board } from "shared/game/constants";
import { RootState } from "..";

export const selectBoard = (state: RootState) => state.board.board;

export const selectPlayerOption = (state: RootState) => state.board.playerOption;

export const selectColumnIsFull = (columnIndex: number) => (state: RootState) => {
	const board = selectBoard(state);
	return board[0][columnIndex] !== false;
};

export const selectBoardIsFull = (state: RootState) => {
	const board = selectBoard(state);
	return board[0].every((cell) => cell !== false);
};

const checkHorizontalWin = (board: Board) => {
	for (let row = 0; row < 6; row++) {
		for (let col = 0; col < 4; col++) {
			const cell = board[row][col];
			if (cell === false) continue;
			if (cell === board[row][col + 1] && cell === board[row][col + 2] && cell === board[row][col + 3]) {
				return cell;
			}
		}
	}
	return false;
};

const checkVerticalWin = (board: Board) => {
	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 7; col++) {
			const cell = board[row][col];
			if (cell === false) continue;
			if (cell === board[row + 1][col] && cell === board[row + 2][col] && cell === board[row + 3][col]) {
				return cell;
			}
		}
	}
	return false;
};

const checkDiagonalRightWin = (board: Board) => {
	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 4; col++) {
			const cell = board[row][col];
			if (cell === false) continue;
			if (
				cell === board[row + 1][col + 1] &&
				cell === board[row + 2][col + 2] &&
				cell === board[row + 3][col + 3]
			) {
				return cell;
			}
		}
	}
	return false;
};

const checkDiagonalLeftWin = (board: Board) => {
	for (let row = 0; row < 3; row++) {
		for (let col = 3; col < 7; col++) {
			const cell = board[row][col];
			if (cell === false) continue;
			if (
				cell === board[row + 1][col - 1] &&
				cell === board[row + 2][col - 2] &&
				cell === board[row + 3][col - 3]
			) {
				return cell;
			}
		}
	}
	return false;
};

export const selectWinner = (state: RootState) => {
	const board = state.board.board;

	const horizontalWinner = checkHorizontalWin(board);
	const verticalWinner = checkVerticalWin(board);
	const diagonalRightWinner = checkDiagonalRightWin(board);
	const diagonalLeftWinner = checkDiagonalLeftWin(board);

	if (horizontalWinner) {
		return horizontalWinner;
	} else if (verticalWinner) {
		return verticalWinner;
	} else if (diagonalRightWinner) {
		return diagonalRightWinner;
	} else if (diagonalLeftWinner) {
		return diagonalLeftWinner;
	}

	return false;
};
