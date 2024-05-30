import styles from './home.module.css';
import  Banner  from '../../Scenes/Banner/Banner';

const Home = () => {
  return (
    <div className={styles.containerHome}>
        <Banner/>
    </div>
  )
}

export default Home