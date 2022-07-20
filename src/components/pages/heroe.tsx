import { useNavigate } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import { HeroeData } from '../interfaces';
import {useState } from "react";

export function Heroe(){
  const [heroe, setHeroe] = useState<HeroeData[]>([]);
  const navigate = useNavigate();  
  function navigateToHeroes(){
    navigate('/')
  }
  
  return (
    <div className='container' >
      <div>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
          </Card.Text>
      </Card.Body>
      </Card>
      <Button onClick={navigateToHeroes} >Return</Button>
      </div>
     {/* <Card style={{ width: '18rem' }}>
        {heroes.name}
        <Card.Img variant="top" src={`${heroes.thumbnail?.path}.jpg`} />
        <Card.Body>
          <Card.Text>
            {heroes.description}
          </Card.Text>
        </Card.Body>
        <Button className="btn-color: #f78f3f" onClick={navigateToHeroe}>About</Button>
      </Card>    */}
      
  
  </div>
  )
}