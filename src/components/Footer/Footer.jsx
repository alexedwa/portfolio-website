import styles from './Footer.module.css'

function Footer() {
    return(
        <div className={styles.footerContainer}>
            <a href='https://github.com/alexedwa' target='_blank' className={styles.image}></a>
        </div>
    )
}

export default Footer