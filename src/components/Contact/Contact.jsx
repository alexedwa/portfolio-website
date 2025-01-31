import styles from './Contact.module.css'
function Contact() {
    return(
        <div className={styles.contactContainer} id='Contact'>
            <h1 className={styles.subtitle}>Contact me!</h1>
            <p className={styles.contactText}>If you would like to send me a message or contact me, please do below!</p>
            <form action="https://api.web3forms.com/submit" method='POST' className={styles.contactForm}>
                <input type='hidden' name='access_key' value = 'c5ca6deb-bafb-4469-a4e9-994d5d21365c' ></input>
                <input className={styles.contactInput} type='text' name='name' placeholder='Your Name'required></input>
                <input className={styles.contactInput} type='text' name='email' placeholder='Your Email' required></input>
                <textarea className={styles.contactInputMessage} name='message' placeholder='Your Message' required></textarea>
                <button type='submit' className={styles.contactSubmit}>Submit →</button>
            </form>
        </div>
    )
}
export default Contact