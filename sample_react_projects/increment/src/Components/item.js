
import React, { useState} from 'react';
import { Button } from 'reactstrap';
import "../App.css";

const Item = (props)=> {

  const [count, setCount] = useState(0);
  const inc = 1;
  const dec = -1;

  const increase = () => {  
    setCount(count+1);
    props.totalItems(inc);
  }
  const decrease = () => {  
    setCount(count-1);
    if (count<=0) {
      setCount(0);
    }
    else { props.totalItems(dec);}
   
  }


  return (

    
    <div>
      <Button color={count<=0?"warning":"primary"} className="ml">{count<=0?"Zero":count}</Button>
      <Button color="secondary" className="ml" onClick={increase}>Increase </Button>
      <Button color="secondary" className="ml" onClick={decrease}>Decrease </Button>
      <Button color="danger" className="ml" onClick={() => props.onDelete(props.id)}>Delete</Button>
    </div>
  );
}

export default Item;