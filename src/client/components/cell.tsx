import React, { useEffect, useState } from "@rbxts/react";
import { Cell } from "shared/game/constants";

interface CellProps {
	columnIndex: number;
	rowIndex: number;
	cell: Cell;
}

export function Cell({ columnIndex, rowIndex, cell }: CellProps) {
	const [rotation, setRotation] = useState(0);

	useEffect(() => {
		setRotation(math.random(-15, 15));
	}, []);

	return (
		<frame
			Size={new UDim2(0, 50, 0, 50)}
			Position={new UDim2(0, columnIndex * 50, 0, (rowIndex + 1) * 50)}
			BackgroundTransparency={1}
		>
			<frame Size={new UDim2(0, 40, 0, 40)} Position={new UDim2(0, 5, 0, 5)} BackgroundTransparency={1}>
				<uicorner CornerRadius={new UDim(0.5, 0.5)} />
				<uistroke LineJoinMode={Enum.LineJoinMode.Miter} Thickness={10} Color={Color3.fromRGB(171, 179, 255)} />
			</frame>
			{cell !== false && (
				<frame
					Size={new UDim2(0, 40, 0, 40)}
					Position={new UDim2(0, 5, 0, 5)}
					BackgroundColor3={
						cell === "PLAYER_1" ? Color3.fromRGB(153, 255, 153) : Color3.fromRGB(255, 255, 224)
					}
				>
					<textlabel
						Text="4"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						Size={new UDim2(0.8, 0, 0.8, 0)}
						Position={new UDim2(0.1, 0, 0.1, 0)}
						BackgroundTransparency={1}
						Rotation={rotation}
						Font={Enum.Font.GothamBold}
						TextScaled
					>
						<uistroke Thickness={2} Color={Color3.fromRGB(0, 0, 0)} />
					</textlabel>
					<uicorner CornerRadius={new UDim(0.5, 0.5)} />
				</frame>
			)}
		</frame>
	);
}
