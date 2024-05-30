import styles from './home.module.css';
import  Banner  from '../../Scenes/Banner/Banner';
import Courses from '../../Scenes/Courses/Courses';
import Contact from '../../Scenes/Contact/Contact';

const Home = () => {
  return (
    <div className={styles.containerHome}>
        <Banner/>
        <Courses/>
        <Contact/>
    </div>
  )
}

export default Home