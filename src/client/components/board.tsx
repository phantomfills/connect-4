import React from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { producer } from "client/store";
import {
	selectBoard,
	selectBoardIsFull,
	selectColumnIsFull,
	selectPlayerOption,
	selectWinner,
} from "client/store/board";
import { images } from "shared/game/constants";

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
				<imagebutton
					Image={images.drop_counter}
					Size={new UDim2(0, 40, 0, 40)}
					Position={new UDim2(0, columnIndex * 50 + 10, 0, 0)}
					BackgroundColor3={
						playerOption === "PLAYER_1" ? Color3.fromRGB(46, 255, 46) : Color3.fromRGB(255, 255, 61)
					}
					BackgroundTransparency={0.7}
					AutoButtonColor={true}
					Event={{
						MouseButton1Click: () => {
							if (winner) return;

							const isFull = producer.getState(selectColumnIsFull(columnIndex));
							if (isFull) return;

							producer.drop(columnIndex, playerOption);
							producer.swapPlayerOption();
						},
					}}
				>
					<uicorner CornerRadius={new UDim(0.2, 0)} />
					<uistroke Color={Color3.fromRGB(255, 255, 255)} Thickness={2} Transparency={0.5} />
				</imagebutton>
			))}

			{board.map((row, rowIndex) => {
				return (
					<frame>
						{row.map((cell, columnIndex) => {
							return (
								<frame
									Size={new UDim2(0, 50, 0, 50)}
									Position={new UDim2(0, columnIndex * 50, 0, (rowIndex + 1) * 50)}
									BackgroundTransparency={1}
								>
									<frame
										Size={new UDim2(0, 40, 0, 40)}
										Position={new UDim2(0, 5, 0, 5)}
										BackgroundTransparency={1}
									>
										<uicorner CornerRadius={new UDim(0.5, 0.5)} />
										<uistroke
											LineJoinMode={"Miter"}
											Thickness={10}
											Color={Color3.fromRGB(171, 179, 255)}
										/>
									</frame>
									{cell !== false && (
										<frame
											Size={new UDim2(0, 40, 0, 40)}
											Position={new UDim2(0, 5, 0, 5)}
											BackgroundColor3={
												cell === "PLAYER_1"
													? Color3.fromRGB(153, 255, 153)
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
				Text="Reset Game"
				Size={new UDim2(0, 100, 0, 40)}
				Position={new UDim2(0, 125, 0, 400)}
				BackgroundColor3={Color3.fromRGB(255, 100, 100)}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				Font={Enum.Font.GothamBold}
				TextSize={16}
				AutoButtonColor={true}
				Event={{
					MouseButton1Click: () => {
						producer.resetBoard();
					},
				}}
			>
				<uicorner CornerRadius={new UDim(0.2, 0)} />
				<uipadding PaddingTop={new UDim(0.2, 0)} PaddingBottom={new UDim(0.2, 0)} />
			</textbutton>

			<textlabel
				Size={new UDim2(0, 100, 0, 40)}
				Position={new UDim2(0, 125, 0, 360)}
				BackgroundTransparency={1}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				Font={Enum.Font.GothamBold}
				TextSize={18}
				Text={
					winner
						? `${winner === "PLAYER_1" ? "Player 1" : "Player 2"} Wins!`
						: boardIsFull
							? "Draw!"
							: `${playerOption === "PLAYER_1" ? "Player 1" : "Player 2"}'s Turn`
				}
			>
				<uistroke Color={Color3.fromRGB(0, 0, 0)} Thickness={2} />
			</textlabel>
		</frame>
	);
}
