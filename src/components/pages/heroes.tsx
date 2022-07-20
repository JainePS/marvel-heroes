import { useEffect, useState } from 'react'
import { FetchHeroes } from '../services/heroesServices/fetchHeroes';
import Card from 'react-bootstrap/Card';
import '/home/learn/Escritorio/projects/learning react/Marvel-SPA/marvel-heroes/src/components/pages/heroes.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HeroData } from '../interfaces';



export function Heroes() {
  const [heroes, setHeroes] = useState<HeroData[]>();
  const [heroID, setHeroID] = useState<number>();
  const navigate = useNavigate();

  useEffect(() => {
    FetchHeroes()
      .then((result: { data: { data: { results: HeroData[] }; }; }) => {
        setHeroes(result.data.data.results);
      })
      .catch((err: string) => {
        console.log(err)
      })
  }, [])



  const heroId = (heroID: number) => {
    setHeroID(heroID);
    navigate(`/heroe/${heroID}`);
  }

  return (
    <>
      <div className='container' >
        {(!!heroes) && heroes.map(hero =>
          <><Card style={{ width: '18rem' }} key={hero.id}>
            <Card.Img variant="top" src={`${hero.thumbnail?.path}.jpg`} />
            <Card.Body key={hero.id}>
              <h3>{hero.name}</h3>
              ID:{hero.id}
              <hr></hr>
              <Card.Text>
                {hero.description}
              </Card.Text>
            </Card.Body>
            <Button className="btn-color: #f78f3f" onClick={() => heroId(hero.id)}>Comics</Button>
          </Card></>
        )}
      </div>;
    </>
  )
}


