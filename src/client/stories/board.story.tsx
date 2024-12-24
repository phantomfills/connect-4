import React from "@rbxts/react";
import { hoarcekat } from "@rbxts/pretty-react-hooks";
import { Board } from "client/components/board";
import { producer } from "client/store";
import { ReflexProvider } from "@rbxts/react-reflex";

export = hoarcekat(() => {
	const clonedProducer = producer.clone();

	clonedProducer.setPlayers(585267099, 1620332636);

	return (
		<ReflexProvider producer={clonedProducer}>
			<Board />
		</ReflexProvider>
	);
});
