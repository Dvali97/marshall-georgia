import React from 'react'
import './Home.css'
import Carousel from './../Carousel/Carousel';
import FirstBlock from '../FirstBlock/FirstBlock';
import SecondBlock from '../SecondBlock/SecondBlock';

const bogliasco = "https://www.rollingstone.com/wp-content/uploads/2018/06/chuck-berry-rolling-stone-cover-story-2017-farewell-to-the-father-of-rock-6a1a7170-b435-4d63-8c07-8255707d2672.jpg?w=1581&h=1054&crop=1"
const countyClare = "https://images.saymedia-content.com/.image/t_share/MTkzNDkwNzg4NzAzODA2Njky/25-greatest-classic-rock-and-roll-songs.jpg"
const craterRock = "https://compote.slate.com/images/8325e6fe-7c22-4b84-a50b-1c365e656371.png"
const giauPass = "https://www.thisdayinmusic.com/wp-content/uploads/2022/10/born-on-this-day-feature-image.jpg"


const Home = () => {
  return (
    <div className='home_container'>
      <Carousel />
      <FirstBlock />
      <SecondBlock />
    </div>
  )
}

export default Home