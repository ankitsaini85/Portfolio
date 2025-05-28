import React from 'react'
import { getImageUrl } from '../../utils'
import Styles from './Hero.module.css'
export const Hero = () => {
  return (
    <section className={Styles.container}>
        <div className={Styles.content}>
            <h1 className={Styles.title}>Hi, I'm Ankit</h1>
            <p className={Styles.description}>I'm a full stack developer with expertize in MERN
             STACK. Reach out if you'd like to learn more!</p>
             <a href='mailto:ankitsaini28052003@gmail.com' className={Styles.contactBtn}>Contact me</a>
        </div>
        <img  src={getImageUrl("hero/heroImage.jpeg")} alt="" className={Styles.heroImg} />
        <div className={Styles.topBlur}/>
        <div className={Styles.bottomBlur}/>
    </section>
  )
}
