import { useEffect, useState } from 'react'
import { APIRequest } from '../services/APIrequestService';
import Card from 'react-bootstrap/Card';
import '/home/learn/Escritorio/projects/learning react/Marvel-SPA/marvel-heroes/src/components/pages/heroes.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HeroeData} from '../interfaces';


export function Heroes() {
  const [heroes, setHeroes] = useState<HeroeData[]>();
  const navigate = useNavigate();
  
  useEffect(() => {
   APIRequest()
          .then((result: { data: { data: { results: HeroeData[]}; }; }) => {
            setHeroes(result.data.data.results);
          })
          .catch((err: string) => { 
            console.log(err)  
          })
  }, [])


  function navigateToHeroe(){
   navigate('/heroe')
   }

 return (
  <>

  <div className='container' >

    {(!!heroes) && heroes.map(heroes=>
     <Card style={{ width: '18rem' }} key={heroes.id}>
     {heroes.name}
     <Card.Img variant="top" src={`${heroes.thumbnail?.path}.jpg`} />
     <Card.Body key={heroes.id}>
     ID:{heroes.id}
     <hr></hr>
     <Card.Text>
     {heroes.description}
     </Card.Text>
     </Card.Body>
     <Button className="btn-color: #f78f3f" onClick={navigateToHeroe}>About</Button>
     </Card>   
    )}
  
  </div>;
  </>
 )
}


