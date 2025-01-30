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
            <p className={styles.CVText}>
                <a id='CV'>Below is a link for my CV to see more indepth details about the projects I have done.</a>
            </p>
            <a href='https://alexedwa1.tiiny.site/' target='blank' className={styles.CVouter}>
                <button className={styles.CVLink}>CV</button>
            </a>
        </div>
    )
}

export default About