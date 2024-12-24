import React from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { selectBoard } from "client/store/board";
import { DropButton } from "./drop-button";
import { Cell } from "./cell";
import { ResetButton } from "./reset-button";
import { GameState } from "./game-state";

export function Board() {
	const board = useSelector(selectBoard);

	return (
		<frame
			Size={new UDim2(0, 400, 0, 450)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
		>
			{board[0].map((_, columnIndex) => (
				<DropButton columnIndex={columnIndex} key={`drop-button-${columnIndex}`} />
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

			<frame
				Size={new UDim2(0, 35, 0, 150)}
				Position={new UDim2(0, -30, 0, 300)}
				BackgroundColor3={Color3.fromRGB(153, 163, 227)}
				BorderSizePixel={0}
				ZIndex={-1}
			/>
			<frame
				Size={new UDim2(0, 35, 0, 150)}
				Position={new UDim2(0, 345, 0, 300)}
				BackgroundColor3={Color3.fromRGB(153, 163, 227)}
				BorderSizePixel={0}
				ZIndex={-1}
			/>

			<ResetButton />
			<GameState />
		</frame>
	);
}
