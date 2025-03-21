import { Devvit } from "@devvit/public-api";

export const Preview: Devvit.BlockComponent<{text?:string}> = ({ text = 'Loading'}) => {
    return (
        <zstack width={"100%"} height={"100%"} alignment="center middle">
            <vstack width={"100%"} height={"100%"} alignment="center middle">
                <image
                url="loading.gif"
                description="loading"
                width={"140px"}
                height={"140px"}
                imageWidth={"240px"}
                imageHeight={"240px"}
                />
                <spacer size="small"/>
                <text maxWidth={"80%"} size="large" weight="bold" alignment="center middle" wrap>
                    {text}
                </text>
            </vstack>
        </zstack>
    )
}