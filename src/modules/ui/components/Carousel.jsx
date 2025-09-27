import Carousel from 'react-bootstrap/Carousel';


function Projects() {
  return (
    <div className='border-4 border-red-500 rounded'>
    <Carousel>
      <Carousel.Item>
        <img src="/One.jpg" />
        <Carousel.Caption>
          <h3>AI SaaS</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='border-r-2'>
        <img src="/Two.jpg" className='border-r-10'/>
        <Carousel.Caption>
          <h3>MUSAI</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/Three.jpg"/>
        <Carousel.Caption>
          <h3>Nimbus KeyBoards</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Projects;