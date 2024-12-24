import { createProducer } from "@rbxts/reflex";
import { Board, Cell, PlayerOption } from "shared/game/constants";

const _ = false;

interface BoardState {
	board: Board;
	playerOption: PlayerOption;
}

const initialState: BoardState = {
	board: [
		[_, _, _, _, _, _, _],
		[_, _, _, _, _, _, _],
		[_, _, _, _, _, _, _],
		[_, _, _, _, _, _, _],
		[_, _, _, _, _, _, _],
		[_, _, _, _, _, _, _],
	],
	playerOption: "PLAYER_1",
};

export const boardSlice = createProducer(initialState, {
	resetBoard: () => initialState,

	drop: (state, columnIndex: number, playerOption: PlayerOption) => {
		const column: [number, number][] = [];
		state.board.forEach((_, rowIndex) => {
			column.push([rowIndex, columnIndex]);
		});

		const emptyColumn = column.filter((coordinate) => {
			return state.board[coordinate[0]][coordinate[1]] === false;
		});
		if (emptyColumn.isEmpty()) error("Cannot drop; column is full!");

		const lowestCoordinate = emptyColumn[emptyColumn.size() - 1];

		return {
			...state,
			board: state.board.map((row, rowIndex) =>
				row.map((cell, columnIndex) => {
					const rowsEqual = rowIndex === lowestCoordinate[0];
					const columnsEqual = columnIndex === lowestCoordinate[1];

					return rowsEqual && columnsEqual ? playerOption : cell;
				}),
			),
		};
	},

	swapPlayerOption: (state) => ({
		...state,
		playerOption: state.playerOption === "PLAYER_1" ? "PLAYER_2" : "PLAYER_1",
	}),
});
