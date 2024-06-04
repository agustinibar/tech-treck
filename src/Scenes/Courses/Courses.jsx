import styles from './courses.module.css';
import logo from '../../assets/logoTech.jpg';


const Courses = () => {
  const coursesData = [
    {
      title: "Cursos de Programación de Alta Calidad",
      description: "Ofrecerás cursos bien estructurados y actualizados que cubren desde conceptos básicos hasta avanzados en diversos lenguajes y tecnologías."
    },
    {
      title: "Bootcamps Intensivos",
      description: "Programas intensivos en vivo que permiten a los estudiantes aprender rápidamente a través de proyectos prácticos."
    },
    {
      title: "Mentoría Personalizada",
      description: "Sesiones uno a uno o en grupos pequeños para proporcionar orientación específica y resolver dudas."
    }
  ];
  return (
    <div className={styles.courses}>
    <h2 className={styles.tittle}>Cursos Disponibles</h2>
    <div className={styles.courseList}>
      {coursesData.map((course, index) => (
        <>
        <div key={index} className={styles.courseCard}>
          <div className={styles.imgCourse}>
          <img src={logo} alt="logo" />
          </div> 
          <div className={styles.infoCourses}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          </div>
        </div>
        </>
      ))}
    </div>
  </div>
  )
}

export default Courses