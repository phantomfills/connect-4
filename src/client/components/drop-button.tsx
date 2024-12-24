import React from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { producer } from "client/store";
import { selectBoardIsFull, selectColumnIsFull, selectPlayerOption, selectWinner } from "client/store/board";
import { images } from "shared/game/constants";

interface DropButtonProps {
	columnIndex: number;
}

export function DropButton({ columnIndex }: DropButtonProps) {
	const playerOption = useSelector(selectPlayerOption);
	const winner = useSelector(selectWinner);
	const boardIsFull = useSelector(selectBoardIsFull);

	return (
		<imagebutton
			Image={images.drop_counter}
			Size={new UDim2(0, 40, 0, 40)}
			Position={new UDim2(0, columnIndex * 50 + 10, 0, 0)}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BackgroundTransparency={0.7}
			AutoButtonColor={true}
			Event={{
				MouseButton1Click: () => {
					if (winner || boardIsFull) return;
					if (producer.getState(selectColumnIsFull(columnIndex))) return;

					producer.drop(columnIndex, playerOption);
					producer.swapPlayerOption();
				},
			}}
		>
			<uicorner CornerRadius={new UDim(0.15, 0)} />
			<uistroke Color={Color3.fromRGB(255, 255, 255)} Thickness={2} />
		</imagebutton>
	);
}
