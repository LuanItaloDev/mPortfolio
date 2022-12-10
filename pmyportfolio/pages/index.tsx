import Menu from '../components/menu/Menu'
import Hero from '../components/hero/Hero'
import Footer from '../components/footer/Footer'
import Portfolio from '../components/portfolio/Portfolio'
import MyBlog from '../components/myBlog/MyBlog'
import styles from '../styles/Home.module.css'
import Falecomigo from '../components/falecomigo/Falecomigo'

export default function Home() {
  return (
    <div className={styles.container}>
      <Menu/>
      <Hero/>
      <Portfolio/>
      {/* <MyBlog/> */}
      <Falecomigo/>
      <Footer/>
    </div>
  )
}