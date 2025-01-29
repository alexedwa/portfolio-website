import styles from './Header.module.css'
function Header() {
    return(
        <div className={styles.navbar}>
            <p className={styles.title}>Alexander Edwards</p>
            <ul className={styles.list}>
                <li className={styles.listItems}><a className={styles.linkText} href='#About'>About</a></li>
                <li className={styles.listItems}><a className={styles.linkText} href='#Projects'>Projects</a></li>
                <li className={styles.listItems}><a className={styles.linkText} href='#CV'>CV</a></li>
                <li className={styles.listItems}><a className={styles.linkText} href='#Contact'>Contact</a></li>
                <li className={styles.listItems}><a className={styles.linkText} href='https://github.com/alexedwa' target='_blank'>GitHub</a></li>
            </ul>
            <div className={styles.dropdown}>
                <button className={styles.dropdownButton}>≡</button>
                <div className={styles.dropdownContent}>
                    <a href='#About'>About</a>
                    <a href='#Projects'>Projects</a>
                    <a href='#CV'>CV</a>
                    <a href='#Contact'>Contact</a>
                    <a href='https://github.com/alexedwa' target='_blank'>GitHub</a>
                </div> 
             </div>
        </div>
    )
}

export default Header