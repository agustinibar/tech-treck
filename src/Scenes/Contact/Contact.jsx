import styles from './contact.module.css';
import logo from '../../assets/logoTech.jpg';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
          <img src={logo} alt="logotype" />
          <div className={styles.contact}>
            <h3>Contacto</h3>
            <p>62123151</p>
            <p>adeadadea@ffa.com</p>
            <p>La calle, 454</p>
          </div>
          <div className={styles.socialMedia}>
            <h3>Redes Sociales</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Youtube</p>
          </div>
      </div>
      <div className={styles.reviews}>
        <h2>Construyamos el mañana</h2>
        
      </div>
      
    </div>
  )
}

export default Contact