import styles from '../../../../styles/atoms/Card.module.css'
import { StickerLabel } from '../../atoms'

interface ICardProps {
    stickerLabel?: string;
    img?: any;
    title?: string;
    price?: number;
    subText?: string;
    url: string;
}
const Card: React.FunctionComponent<ICardProps> = ({
    stickerLabel,
    img,
    title,
    price,
    subText,
    url,
}) => {
    const suffix = "Kr.";
    return (
        <a href={url}>
            <div className={styles.card}>
                <StickerLabel
                    labelText={stickerLabel}
                />
                <img className={styles.img} src={img} alt="Soundbox" />
                <div className={styles.cardText}>
                    <h2 className={styles.title}>{title}</h2>
                    <h3>{price + " " + suffix}</h3>
                </div>
                <p>{subText?.toUpperCase()}</p>
            </div>
        </a>
    )
};

export default Card;