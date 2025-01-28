import styles from './Header.module.css'

function Header() {
    
    return(
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                <li className={styles.listItems}><a className={styles.linkText} href='#'>About</a></li>
                <li className={styles.listItems}><a className={styles.linkText} href='#'>Projects</a></li>
                <li className={styles.listItems}><a className={styles.linkText} href='#'>CV</a></li>
                <li className={styles.listItems}><a className={styles.linkText} href='https://github.com/alexedwa'>GitHub</a></li>
                <li className={styles.listItems}><a className={styles.linkText} href='#'>Contact</a></li>
            </ul>
        </div>
    );
}

export default Header