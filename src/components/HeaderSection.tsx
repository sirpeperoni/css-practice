type Props = {
    headerText: string;
    infoText: string;
    widthInfoText: number
}

export const HeaderSection = ({headerText, infoText, widthInfoText}: Props) => {
    const width = `${widthInfoText}px`
    return <div
        className="header-section"
    >
        <span>{headerText}</span>
        <p style={{width: width}}>{infoText}</p>
    </div>
}