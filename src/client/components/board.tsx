import Object from "@rbxts/object-utils";
import React, { useState } from "@rbxts/react";

type Cell = false | "PLAYER_1" | "PLAYER_2";
type Board = Cell[][];

const _ = false;

export function Board() {
	const [boardState, setBoardState] = useState<Board>([
		[_, _, _, _, _, _, _],
		[_, _, _, _, _, _, _],
		[_, _, _, _, _, _, _],
		[_, _, _, _, _, _, _],
		[_, _, _, _, _, _, _],
		[_, _, _, _, _, _, _],
		[_, _, _, _, _, _, _],
	]);

	return boardState.map((row, rowIndex) => {
		return row.map((cell, columnIndex) => {
			return (
				<frame
					Size={new UDim2(0, 50, 0, 50)}
					Position={new UDim2(0, rowIndex * 50, 0, columnIndex * 50)}
					BackgroundColor3={Color3.fromRGB(255, 153, 153)}
				>
					<textbutton
						Size={new UDim2(1, 0, 1, 0)}
						BackgroundTransparency={1}
						Text=""
						Event={{
							MouseButton1Click: () => {
								const updatedBoardState = Object.deepCopy(boardState);
								const current = updatedBoardState[rowIndex][columnIndex];
								updatedBoardState[rowIndex][columnIndex] =
									current === false ? "PLAYER_1" : current === "PLAYER_1" ? "PLAYER_2" : false;

								setBoardState(updatedBoardState);
							},
						}}
					/>

					{cell !== false && (
						<frame
							Size={new UDim2(0, 40, 0, 40)}
							Position={new UDim2(0, 5, 0, 5)}
							BackgroundColor3={
								cell === "PLAYER_1" ? Color3.fromRGB(153, 255, 255) : Color3.fromRGB(255, 255, 224)
							}
						>
							<uicorner CornerRadius={new UDim(0.5, 0.5)} />
						</frame>
					)}
				</frame>
			);
		});
	});
}
