import React from "@rbxts/react";
import { producer } from "client/store";

export function ResetButton() {
	return (
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
	);
}
