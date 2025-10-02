
import clsx from 'clsx';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function LanguageCard(props) {
  return (
    <div className={clsx('flex backdrop-blur-sm flex-col border-2 items-center justify-between rounded-lg bg-gray-900!', props.col, props.row)}>
      <div className='bg-black/15 rounded-md flex justify-center w-fit p-2 mt-4'>
        <img src={props.image} className='size-12' />
      </div>
      <div className='bg-black/15 w-full flex items-center justify-center text-center'>
        <p className='text-white mt-2 body'>{props.name}</p>
      </div>
    </div>
  );
}

export default LanguageCard;