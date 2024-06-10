import styles from './recomendaciones.module.css';
import img1 from '../../assets/img.jpg'
const Recomendaciones = () => {
  return (
    <div className={styles.containerRecomendaciones}>
        <div className={styles.card}>
          <img src={img1} alt="" />
          <h3>Gulliano</h3>
          <p className={styles.testimonial}>Gracias a Tech Trek, pude iniciar mi propio proyecto de e-commerce. Las clases particulares me brindaron las habilidades necesarias para desarrollar y lanzar mi tienda online con éxito. ¡No podría estar más satisfecho con los resultados!</p>
        </div>
        <div className={styles.card}>
        <img src={img1} alt="" />
          <h3>Mariano</h3>
          <p className={styles.testimonial}>Gracias a Tech Trek, aprendí a programar desde cero. Los cursos intensivos me enseñaron a crear webs y apps. Ahora puedo construir mis propios proyectos. ¡Recomiendo Tech Trek a todos los principiantes!</p>
        </div>
        <div className={styles.card}>
        <img src={img1} alt="" />
          <h3>Christian</h3>
          <p className={styles.testimonial}>Gracias a Tech Trek, desarrollé InsightMetrics, una app para optimizar redes sociales empresariales. Su servicio freelance transformó mi idea en una herramienta funcional. ¡Estoy encantado con el resultado!</p>
        </div>
    </div>
  )
}

export default Recomendaciones;