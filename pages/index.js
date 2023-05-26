// import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return ( 
    // <div> 
      // <h4 className={styles.w7header}>7 Wonders of the World</h4>
    <Carousel fade>
      <Carousel.Item className={styles.wonders}>
      <h4>7 Wonders of the World</h4>
        <img
          src="GreatWall.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Great Wall of China</h3>
          <p>The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.wonders}>
      <h4>7 Wonders of the World</h4>
        <img
          src="MachuPicchu.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Machu Picchu</h3>
          <p>Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.wonders}>
      <h4>7 Wonders of the World</h4>
        <img
          src="TajMahal.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Taj Mahal</h3>
          <p>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> //</div>
  )
}