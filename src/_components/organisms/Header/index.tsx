import styles from '../../../../styles/Header.module.css'

interface IHeaderProps { }

const Header: React.FunctionComponent<IHeaderProps> = ({

}) => {
    return (
        <div className={styles.header}>
            <a href="/" className={styles.headerLogo}>SOUNDBOKS</a>
            {/* <img src="../../../../public/img/logo.svg" alt="Soundboks logo" width={22} height={22}/> */}
            <div className={styles.headerDivided}>
                <a href="/products">Products</a>
                <a href="/ourBlog">Our Blog</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    )
};

export default Header;