import styles from '../CTA/calltoaction.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';


const CallToAction = () => {
  return (
    <div className={styles.slide}>
      <h2>Contactanos a traves de cualquiera de nuestras redes sociales</h2>
      <div className={styles.socialMedia}>
        <InstagramIcon fontSize='large'/>
        <TwitterIcon fontSize='large'/>
        <WhatsAppIcon fontSize='large'/>
        <EmailIcon fontSize='large'/>
      </div>
      
      <button>Deja tu comentario</button>
    </div>
  );
};

export default CallToAction;
