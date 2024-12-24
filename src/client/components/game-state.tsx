import React from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { selectBoardIsFull, selectPlayerOption, selectWinner } from "client/store/board";

export function GameState() {
	const winner = useSelector(selectWinner);
	const boardIsFull = useSelector(selectBoardIsFull);
	const playerOption = useSelector(selectPlayerOption);

	return (
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
						: `${playerOption === "PLAYER_1" ? "🟢 Player 1" : "🟡 Player 2"}'s Turn`
			}
		>
			<uistroke Color={Color3.fromRGB(0, 0, 0)} Thickness={2} />
		</textlabel>
	);
}
