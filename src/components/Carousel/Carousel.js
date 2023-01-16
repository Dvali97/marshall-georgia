import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

// const bogliasco = "https://www.rollingstone.com/wp-content/uploads/2018/06/chuck-berry-rolling-stone-cover-story-2017-farewell-to-the-father-of-rock-6a1a7170-b435-4d63-8c07-8255707d2672.jpg?w=1581&h=1054&crop=1"
// const countyClare = "https://images.saymedia-content.com/.image/t_share/MTkzNDkwNzg4NzAzODA2Njky/25-greatest-classic-rock-and-roll-songs.jpg"
// const craterRock = "https://compote.slate.com/images/8325e6fe-7c22-4b84-a50b-1c365e656371.png"
// const giauPass = "https://www.thisdayinmusic.com/wp-content/uploads/2022/10/born-on-this-day-feature-image.jpg"

const bogliasco = "/images/first-slide.jpg"
const countyClare = '/images/second-slide.jpg'
const craterRock = '/images/third-slide.jpg'
const giauPass = '/images/fourth-slide.jpg'


const Slider = () => {
  return (
    <Carousel className='carousel_container'>
      <Carousel.Item interval={1000}
        >
        <img
          className="d-block w-100"
          src={bogliasco}
          alt="First slide"
        //   style={{height: "100vh"}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={countyClare}
          alt="Second slide"
        //   style={{height: "100vh"}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={craterRock}
          alt="Third slide"
        //   style={{height: "100vh"}}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={giauPass}
          alt="fourth slide"
        //   style={{height: "100vh"}}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;