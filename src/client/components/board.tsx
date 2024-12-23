import React from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { producer } from "client/store";
import { selectBoard, selectColumnIsFull, selectPlayerOption, selectWinner } from "client/store/board";

export function Board() {
	const board = useSelector(selectBoard);
	const playerOption = useSelector(selectPlayerOption);
	const winner = useSelector(selectWinner);

	return (
		<frame Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1}>
			{board[0].map((_, columnIndex) => (
				<textbutton
					Text="Drop"
					Size={new UDim2(0, 50, 0, 30)}
					Position={new UDim2(0, columnIndex * 50, 0, 0)}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					Event={{
						MouseButton1Click: () => {
							if (winner) return;

							const isFull = producer.getState(selectColumnIsFull(columnIndex));
							if (isFull) return;

							producer.drop(columnIndex, playerOption);
							producer.swapPlayerOption();
						},
					}}
				/>
			))}

			{board.map((row, rowIndex) => {
				return (
					<frame>
						{row.map((cell, columnIndex) => {
							return (
								<frame
									Size={new UDim2(0, 50, 0, 50)}
									Position={new UDim2(0, columnIndex * 50, 0, (rowIndex + 1) * 50)}
									BackgroundColor3={Color3.fromRGB(255, 153, 153)}
								>
									{cell !== false && (
										<frame
											Size={new UDim2(0, 40, 0, 40)}
											Position={new UDim2(0, 5, 0, 5)}
											BackgroundColor3={
												cell === "PLAYER_1"
													? Color3.fromRGB(153, 255, 255)
													: Color3.fromRGB(255, 255, 224)
											}
										>
											<uicorner CornerRadius={new UDim(0.5, 0.5)} />
										</frame>
									)}
								</frame>
							);
						})}
					</frame>
				);
			})}

			<textbutton
				Text="Clear"
				Size={new UDim2(0, 50, 0, 30)}
				Position={new UDim2(0, 0, 0, 370)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				Event={{
					MouseButton1Click: () => {
						producer.resetBoard();
					},
				}}
			/>

			<textlabel
				Size={new UDim2(0, 100, 0, 30)}
				Position={new UDim2(0, 50, 0, 370)}
				BackgroundTransparency={1}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				Text={
					winner
						? winner === "PLAYER_1"
							? "Player 1 wins!"
							: "Player 2 wins!"
						: `${playerOption === "PLAYER_1" ? "Player 1" : "Player 2"}'s turn!`
				}
			/>
		</frame>
	);
}
