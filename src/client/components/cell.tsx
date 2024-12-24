import React, { useEffect, useState } from "@rbxts/react";
import { Cell } from "shared/game/constants";
import { colors } from "shared/game/constants/color";

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
				<uistroke LineJoinMode={Enum.LineJoinMode.Miter} Thickness={10} Color={colors.light_blue} />
			</frame>
			{cell !== false && (
				<frame
					Size={new UDim2(0, 40, 0, 40)}
					Position={new UDim2(0, 5, 0, 5)}
					BackgroundColor3={cell === "PLAYER_1" ? colors.green : colors.orange}
				>
					<uicorner CornerRadius={new UDim(0.5, 0.5)} />
				</frame>
			)}
		</frame>
	);
}
