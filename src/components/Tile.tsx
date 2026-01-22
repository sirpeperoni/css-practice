import { Card } from "./Card"

type Props = {
    image: string,
    name: string,
    position: string,
    about: string
}


export const Tile = ({image, name, position, about}: Props) => {
    return <Card backgroundColor="bg-FFFFFF" shadow={true} paddingHorizontal={35} paddingVertical={40}>
        <div>
            <div className="team-card-header">
                <div className="team-flex">
                    <img src={image} alt=""/>
                    <div className="team-info">
                        <h2>{name}</h2>
                        <span>{position}</span>
                    </div>
                </div>
                <a href="">
                    <div className="linkedin">
                        <span className="color-B9FF66">in</span>
                    </div>
                </a>
            </div>
            <div className="divider"></div>
            <div className="team-card-info">
                <p>{about}</p>
            </div>
        </div>
    </Card>
}