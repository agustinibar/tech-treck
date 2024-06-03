import styles from './navbar.module.css';
import techlogo from '../../assets/logoTech.jpg';

const Navbar = () => {
  return (
    <>
    <div  className={styles.navbarContainer}>
        <img src={techlogo} alt="techlogo" />
        <p>Inicio</p>
        <p>Cursos</p>
        <p>Estudiantes</p>
        <p>Contacto</p>
        <button className={styles.navbarButton}> Inscribete ahora!</button>
    </div>
    </>
  )
}

export default Navbar