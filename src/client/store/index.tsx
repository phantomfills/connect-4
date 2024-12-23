import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import { combineProducers, InferState } from "@rbxts/reflex";
import { boardSlice } from "./board";

export type RootState = InferState<typeof producer>;

export const producer = combineProducers({
	board: boardSlice,
});

export function RootProvider(props: React.PropsWithChildren) {
	return <ReflexProvider producer={producer}>{props.children}</ReflexProvider>;
}
