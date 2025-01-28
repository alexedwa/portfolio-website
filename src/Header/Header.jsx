import styles from './Header.module.css'

function Header() {
    
    return(
        <ul className={styles.list}>
            <li className={styles.listItems}><a href='#'>About</a></li>
            <li className={styles.listItems}><a href='#'>Projects</a></li>
            <li className={styles.listItems}><a href='#'>CV</a></li>
            <li className={styles.listItems}><a href='https://github.com/alexedwa'>GitHub</a></li>
        </ul>
    );
}

export default Header