import styles from './Footer.module.css'

function Footer() {
    return(
        <div className={styles.footerContainer}>
            <a href='https://github.com/alexedwa'><img className={styles.image} src='/src/assets/github-mark-white.svg' alt='GitHub logo and link to GitHub profile' width={80} height={80}></img></a>
        </div>
    )
}

export default Footer