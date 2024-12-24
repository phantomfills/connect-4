import React from "@rbxts/react";
import { hoarcekat } from "@rbxts/pretty-react-hooks";
import { ProfileCard } from "client/components/profile-card";

export = hoarcekat(() => {
	return (
		<ProfileCard
			size={new UDim2(0, 100, 0, 100)}
			position={new UDim2(0.5, -50, 0.5, -50)}
			userId={2205107826}
			playerOption="PLAYER_2"
		/>
	);
});
