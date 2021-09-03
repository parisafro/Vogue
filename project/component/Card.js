// import SpringPart from './SpringPart'
import cardStyle from '../styles/card.module.css'
import style from '../styles/Home.module.css'

const Card=()=>{

    return(
        <>
            {/* <div className={cardStyle.main__content}>
                <img className={cardStyle.main__content__card} src='naeim-jafari-laobUPA4jR8-unsplash.jpg'></img>
                <img className={cardStyle.main__content__card} src='naeim-jafari-svQZUVLOLjM-unsplash.jpg'></img>
            </div> */}
            {/* <SpringPart/> */}
            <div className={cardStyle.second__content}>
                <img className={cardStyle.second__content__card} src='2021-03-26_2-00-43.png'></img>
                <div className={cardStyle.second__content__part}>
                    <span style={{fontFamily:'Indie Flower', fontSize:'20px', color:'whitesmoke'}}>VOGUE  •  LOUNGEWEAR  •  2021 LOOKBOOK </span>
                    <span style={{display:'block', position:'absolute', color:'whitesmoke', fontSize:'60px', fontFamily:'Indie Flower'}}>
                        At Home. In Style.
                    </span>
                    <img src='2021-03-26_2-00-43.part.png'></img>
                    <span style={{fontFamily:'Indie Flower', fontSize:'20px'}} className={style.link}>
                        view more
                    </span>
                </div>
            </div>
            <div className={cardStyle.third__content}>
                <span className={cardStyle.third__content__span}>Follow <span style={{fontSize:'45px'}}>@VAGUE</span> on Instagram</span>
                <div className={cardStyle.portfolio__items__wrapper}>
                    <div className={cardStyle.portfolio__item__wrapper}>
                        <div className={cardStyle.portfolio__image__wrapper} 
                            style={{backgroundImage: 'url(2021-03-26_2-58-20.png)'}}></div>
                        <div className={cardStyle.title__subtitle__wrapper}>
                            <div className={cardStyle.title__wrapper}>
                                It all depends on how we look at things, and not how they are in themselves. 
                            </div>
                            <div className={cardStyle.subtitle__wrapper}>
                                Carl Jung
                            </div>
                        </div>
                    </div>
                    <div className={cardStyle.portfolio__item__wrapper}>
                        <img className={cardStyle.portfolio__image__wrapper} src='2021-03-26_2-56-45.png'></img>
                        <div className={cardStyle.title__subtitle__wrapper}>
                            <div className={cardStyle.title__wrapper}>
                                It all depends on how we look at things, and not how they are in themselves. 
                            </div>
                            <div className={cardStyle.subtitle__wrapper}>
                                Carl Jung
                            </div>
                        </div>
                    </div>
                    <div className={cardStyle.portfolio__item__wrapper}>
                        <img className={cardStyle.portfolio__image__wrapper} src='2021-03-26_2-55-57.png'></img>
                        <div className={cardStyle.title__subtitle__wrapper}>
                            <div className={cardStyle.title__wrapper}>
                                It all depends on how we look at things, and not how they are in themselves. 
                            </div>
                            <div className={cardStyle.subtitle__wrapper}>
                                Carl Jung
                            </div>
                        </div>
                    </div>
                    <div className={cardStyle.portfolio__item__wrapper}>
                        <img className={cardStyle.portfolio__image__wrapper} src='2021-03-26_2-57-25.png'></img>
                        <div className={cardStyle.title__subtitle__wrapper}>
                            <div className={cardStyle.title__wrapper}>
                            At Home With Festen, the Parisian Design Duo Perfecting Low-Key Chic. 
                            </div>
                            <div className={cardStyle.subtitle__wrapper}>
                                Carl Jung
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card