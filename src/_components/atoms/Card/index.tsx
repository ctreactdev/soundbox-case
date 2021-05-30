import styles from '../../../../styles/Home.module.css'

interface ICardProps {
    stickerLabel?: string;
    img?: any;
    title?: string;
    subText?: string;
}
const Card: React.FunctionComponent<ICardProps> = ({
    stickerLabel,
    img,
    title,
    subText,
}) => {
    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
            {/* Sticker label */}
            {/* img */}
            {/* title + price */}
            {/* sub text */}
        </div>
    )
};

export default Card;