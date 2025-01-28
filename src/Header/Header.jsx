import styles from './Header.module.css'
function Header() {
    return(
        <div className={styles.navbar}>
            <p className={styles.title}><a className={styles.linkText} href="#Top">Alexander Edwards</a></p>
            <ul className={styles.list}>
                <li className={styles.listItems}><a className={styles.linkText} href='#'>About</a></li>
                <li className={styles.listItems}><a className={styles.linkText} href='#'>Projects</a></li>
                <li className={styles.listItems}><a className={styles.linkText} href='#'>CV</a></li>
                <li className={styles.listItems}><a className={styles.linkText} href='#'>Contact</a></li>
                <li className={styles.listItems}><a className={styles.linkText} href='https://github.com/alexedwa'>GitHub</a></li>
            </ul>
        </div>
    );
}

export default Header