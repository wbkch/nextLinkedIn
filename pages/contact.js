import React ,{useState} from 'react';
import styles from '../styles/Contact.module.css';

const  Contact =()=> {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [desc, setDesc] = useState('')


const handleSubmit =(e)=>{
  e.preventDefault();
  console.log (name ,email, phone, desc)

  const data = { name ,email, phone, desc };
  fetch('http://localhost:3000/api/postcontact', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.text())
.then(data => {
  console.log('Success:', data);

  setName('')
  setEmail('')
  setPhone('')
  setDesc('')
})
.catch((error) => {
  console.error('Error:', error);
});
}

const handleChane =(e)=>{
  if (e.target.name=='name'){
    setName(e.target.value)
  }

  else if (e.target.name=='email'){
    setEmail(e.target.value)
  }

  else if (e.target.name=='phone'){
    setPhone(e.target.value)
  }

  else if(e.target.name=='desc'){
    setDesc(e.target.value)
  }

}
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
           <b> Enter Your Name</b>
          </label>
          <input
            type="text"
            className={styles.formcontrol}
            id="name"
            name="name"
            value={name}
            onChange={handleChane}
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
          <b>  Enter Your Email</b>
          </label>
          <input
            type="email"
            className={styles.formcontrol}
            id="email"
            name="email"
            value={email}
            onChange={handleChane}
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            <b>Enter Your Mobile Number</b>
          </label>
          <input
            type="phone"
            className={styles.formcontrol}
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChane}
          />

        </div>

        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlabel}>
           <b> Enter Your Reviews</b>
          </label>
          <textarea
            name="desc"
            placeholder="Enter yours Reviews"
            className={styles.formcontrol}
            rows="8"
            id="desc"
            value={desc}
            onChange={handleChane}
          />
        </div>

        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
