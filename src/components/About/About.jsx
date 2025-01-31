import styles from './About.module.css'
function About(){
    return(
        <div className={styles.aboutDiv}><a id="About"></a>
            <h1 className={styles.subtitle}>About Me</h1>
            <p className={styles.aboutText}>
                Hello, my name is Alex, and I am currently a Computer Science 
                student currently pursuing a BSc Computer Science (Hons) degree 
                at the University of Plymouth. I have always had a vested interest 
                in computers and tech since I was young and have now turned that 
                into studying a topic I love. I always strive to find and learn new 
                programming languages, libraries and frameworks to, not only broaden 
                my skillset, but also to use these new skills to create something unique.
            </p>
            <h1 className={styles.subtitle}><a id='CV'>Curriculum Vitae</a></h1>
            <p className={styles.CVText}>Below is a link for my CV to see an overview of my academic and work credentials.</p>
            <a href='https://alexedwa1.tiiny.site/' target='blank' className={styles.CVouter}>
                <button className={styles.CVLink}>CV</button>
            </a>
        </div>
    )
}

export default About