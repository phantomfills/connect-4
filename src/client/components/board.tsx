import React from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { selectBoard, selectBoardIsFull, selectPlayerOption, selectWinner } from "client/store/board";
import { DropButton } from "./drop-button";
import { Cell } from "./cell";
import { ResetButton } from "./reset-button";
import { GameState } from "./game-state";

export function Board() {
	const board = useSelector(selectBoard);
	const playerOption = useSelector(selectPlayerOption);
	const winner = useSelector(selectWinner);
	const boardIsFull = useSelector(selectBoardIsFull);

	return (
		<frame
			Size={new UDim2(0, 400, 0, 450)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
		>
			{board[0].map((_, columnIndex) => (
				<DropButton
					columnIndex={columnIndex}
					playerOption={playerOption}
					state={!winner && boardIsFull ? "DRAW" : winner}
					key={`drop-button-${columnIndex}`}
				/>
			))}

			{board.map((row, rowIndex) => {
				return (
					<frame>
						{row.map((cell, columnIndex) => {
							return (
								<Cell
									cell={cell}
									rowIndex={rowIndex}
									columnIndex={columnIndex}
									key={`cell-${rowIndex}-${columnIndex}`}
								/>
							);
						})}
					</frame>
				);
			})}

			<ResetButton />
			<GameState />
		</frame>
	);
}
