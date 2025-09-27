import clsx from 'clsx';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Images(props) {
  return (
    <div className={clsx(props.className, "overflow-hidden")}>
        <img src={props.image} className='rounded-lg object-cover h-full w-full'/>
    </div>
  );
}

export default Images;