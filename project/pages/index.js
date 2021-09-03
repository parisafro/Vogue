import Card from '../component/Card'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div style={{
          backgroundImage: 'url(mike-von-TPUGbQmyVwE-unsplash.jpg)',
          height: "150vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: 'grayscale(20%)'
        }}>
        <div style={{position:'absolute', textAlign:'left', top:'400px', left:'100px', lineHeight:'1.5', color:'#fff', fontFamily:'Indie Flower'}}>
          <span style={{fontSize:'60px'}}>
            Maria McManus
          </span>
          <br/>
          <span style={{display:'block', fontSize:'30px'}}>
            FALL 2021 READY-TO-WEAR
          </span>
          <br/>
          <span style={{marginLeft:'10px', dipslay:'block', fontSize:'27px', cursor:'pointer'}} className={styles.link}>
            shop collection
          </span>
        </div>
      </div>
      <Card/>
    </div>
  )
}
