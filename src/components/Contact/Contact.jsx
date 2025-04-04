import styles from "./Contact.module.css"
import React from "react";

function App() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c5ca6deb-bafb-4469-a4e9-994d5d21365c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className={styles.contactContainer} id='Contact'>
    <h1 className={styles.subtitle}>Contact me!</h1>
    <p className={styles.contactText}>If you would like to send me a message or contact me, please enter your name, email and a message!</p>        
      <form onSubmit={onSubmit} className={styles.contactForm}>
        <input className={styles.contactInput}  type="text" name="name" required/>
        <input className={styles.contactInput}  type="email" name="email" required/>
        <textarea className={styles.contactInputMessage} name="message" required></textarea>
        <button className={styles.contactSubmit} type="submit">Submit →</button>

      </form>
      <span>{result}</span>

    </div>
  );
}

export default App;

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