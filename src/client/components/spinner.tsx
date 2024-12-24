import { useTimer } from "@rbxts/pretty-react-hooks";
import React from "@rbxts/react";
import { images } from "shared/game/constants";

interface SpinnerProps {
	position?: UDim2;
	size?: UDim2;
}

export function Spinner({ position, size }: SpinnerProps) {
	const timer = useTimer();
	const rotation = timer.value.map((value) => (value * 1440) % 360);

	return (
		<imagelabel
			Size={size}
			Position={position}
			BackgroundTransparency={1}
			Image={images.spinner}
			Rotation={rotation}
		/>
	);
}
