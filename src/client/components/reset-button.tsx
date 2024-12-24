import React from "@rbxts/react";
import { useProducer } from "@rbxts/react-reflex";
import { colors } from "shared/game/constants/color";

export function ResetButton() {
	const producer = useProducer();

	return (
		<textbutton
			Text="Start Over"
			Size={new UDim2(0, 100, 0, 40)}
			Position={new UDim2(0, 125, 0, 400)}
			BackgroundColor3={colors.red}
			TextColor3={colors.white}
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
	);
}
