import styles from './home.module.css';
import  Banner  from '../../Scenes/Banner/Banner';
import Courses from '../../Scenes/Courses/Courses';

const Home = () => {
  return (
    <div className={styles.containerHome}>
        <Banner/>
        <Courses/>
    </div>
  )
}

export default Home