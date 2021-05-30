import styles from '../../../../styles/atoms/StickerLabel.module.css'

interface IStickerLabelProps {
    labelText: string | undefined;
}
const StickerLabel: React.FunctionComponent<IStickerLabelProps> = ({
    labelText,
}) => {
    return (
        <div className={styles.stickerLabel}>
            <p>{labelText}</p>
        </div>
    )
};

export default StickerLabel;