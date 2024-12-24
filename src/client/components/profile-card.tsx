import React, { useEffect, useState } from "@rbxts/react";
import { images, PlayerOption } from "shared/game/constants";
import { Players, UserService } from "@rbxts/services";
import { Spinner } from "./spinner";
import { colors } from "shared/game/constants/color";

const THUMBNAIL_TYPE = Enum.ThumbnailType.HeadShot;
const THUMBNAIL_SIZE = Enum.ThumbnailSize.Size420x420;

interface ProfileCardProps {
	position?: UDim2;
	size?: UDim2;
	userId: number;
	playerOption: PlayerOption;
}

export function ProfileCard({ position, size, userId, playerOption }: ProfileCardProps) {
	const [userThumbnail, setUserThumbnail] = useState<string | undefined>(undefined);
	const [displayName, setDisplayName] = useState<string | undefined>(undefined);

	useEffect(() => {
		try {
			const [thumbnail] = Players.GetUserThumbnailAsync(userId, THUMBNAIL_TYPE, THUMBNAIL_SIZE);
			setUserThumbnail(thumbnail);

			const userInfos: (UserInfo | undefined)[] = UserService.GetUserInfosByUserIdsAsync([userId]);

			const firstUserInfo = userInfos[0];
			if (!firstUserInfo) throw "User info not found!";
			setDisplayName(firstUserInfo.DisplayName);
		} catch (error) {
			warn(error);
			setUserThumbnail(images.error);
			setDisplayName(`Oops! Looks like there was a problem.`);
		}
	}, []);

	return (
		<frame Size={size} Position={position} BackgroundTransparency={1}>
			{userThumbnail !== undefined ? (
				<imagelabel
					Size={new UDim2(0.9, -10, 0.9, -10)}
					Position={new UDim2(0.05, 5, 0, 5)}
					BackgroundTransparency={1}
					Image={userThumbnail}
				>
					<uicorner CornerRadius={new UDim(0.5, 0)} />
					<uistroke Color={colors.white} Thickness={2} />
				</imagelabel>
			) : (
				<Spinner size={new UDim2(0.9, -10, 0.9, -10)} position={new UDim2(0.05, 5, 0, 5)} />
			)}

			<textlabel
				Size={new UDim2(1, 0, 0.1, 0)}
				Position={new UDim2(0, 0, 0.9, 0)}
				BackgroundTransparency={1}
				Text={displayName !== undefined ? displayName : "Loading..."}
				Font={Enum.Font.GothamBold}
				TextSize={16}
				TextColor3={colors.white}
				BorderSizePixel={0}
			>
				<uistroke Color={colors.black} Thickness={2} />
				<uicorner CornerRadius={new UDim(0.2, 0)} />
			</textlabel>

			<frame
				Size={new UDim2(0.4, 0, 0.4, -10)}
				Position={new UDim2(0.8, 0, 0, 0)}
				AnchorPoint={new Vector2(0.5, 0)}
				BackgroundColor3={playerOption === "PLAYER_1" ? colors.green : colors.orange}
				ZIndex={2}
			>
				<uiaspectratioconstraint AspectRatio={1} />
				<uicorner CornerRadius={new UDim(0.5, 0)} />
				<textlabel
					Size={new UDim2(1, 0, 1, 0)}
					BackgroundTransparency={1}
					Text={playerOption === "PLAYER_1" ? "1" : "2"}
					TextColor3={colors.white}
					Font={Enum.Font.GothamBold}
					TextScaled
				>
					<uistroke Thickness={2} Color={colors.black} />
				</textlabel>
			</frame>
		</frame>
	);
}
