import React from "@rbxts/react";
import { useProducer, useSelector } from "@rbxts/react-reflex";
import { selectBoardIsFull, selectColumnIsFull, selectPlayerOption, selectWinner } from "client/store/board";
import { images } from "shared/game/constants";
import { colors } from "shared/game/constants/color";

interface DropButtonProps {
	columnIndex: number;
}

export function DropButton({ columnIndex }: DropButtonProps) {
	const producer = useProducer();

	const playerOption = useSelector(selectPlayerOption);
	const winner = useSelector(selectWinner);
	const boardIsFull = useSelector(selectBoardIsFull);

	return (
		<imagebutton
			Image={images.downArrow}
			Size={new UDim2(0, 40, 0, 40)}
			Position={new UDim2(0, columnIndex * 50 + 5, 0, -10)}
			BackgroundColor3={colors.white}
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
			<uistroke Color={colors.black} Thickness={2} />
		</imagebutton>
	);
}
