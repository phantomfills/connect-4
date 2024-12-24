import React from "@rbxts/react";
import { Cell } from "shared/game/constants";

interface CellProps {
	columnIndex: number;
	rowIndex: number;
	cell: Cell;
}

export function Cell({ columnIndex, rowIndex, cell }: CellProps) {
	return (
		<frame
			Size={new UDim2(0, 50, 0, 50)}
			Position={new UDim2(0, columnIndex * 50, 0, (rowIndex + 1) * 50)}
			BackgroundTransparency={1}
		>
			<frame Size={new UDim2(0, 40, 0, 40)} Position={new UDim2(0, 5, 0, 5)} BackgroundTransparency={1}>
				<uicorner CornerRadius={new UDim(0.5, 0.5)} />
				<uistroke LineJoinMode={"Miter"} Thickness={10} Color={Color3.fromRGB(171, 179, 255)} />
			</frame>
			{cell !== false && (
				<frame
					Size={new UDim2(0, 40, 0, 40)}
					Position={new UDim2(0, 5, 0, 5)}
					BackgroundColor3={
						cell === "PLAYER_1" ? Color3.fromRGB(153, 255, 153) : Color3.fromRGB(255, 255, 224)
					}
				>
					<uicorner CornerRadius={new UDim(0.5, 0.5)} />
				</frame>
			)}
		</frame>
	);
}
