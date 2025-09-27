
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <Card className={props.class} >
      <Card.Img variant="top" src={props.image} />
      <Card.Body className='flex flex-col justify-between bg-black'>
        <Card.Title className='text-[#FFFFFF]/50!'>{props.title}</Card.Title>
        <Card.Text className='text-[#FFFFFF]/20'>
          {props.description}
        </Card.Text>
        <Button variant="primary" className='bg-[#a995c9]/90! border-2 border-[#a995c9]!'>View {props.name}</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;