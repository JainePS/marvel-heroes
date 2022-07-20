import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import { ComicElement, HeroData } from '../interfaces';
import { useEffect, useState } from "react";
import { FetchHeroID, FetchHeroComics, FetchHeroStories, FetchHeroEvents } from "../services/heroServices/fetchesHero";


export function Hero() {
  const { heroID } = useParams();
  const { heroComics } = useParams();
  // const { heroStories } = useParams();
  // const { heroEvents } = useParams();

  const [hero, setHero] = useState<HeroData>();
  const [comics, setComics] = useState<ComicElement[]>();

  useEffect(() => {
    FetchHeroID((heroID ?? ' '))
      .then((result: { data: { data: { results: HeroData }; }; }) => {
        setHero(result.data.data.results);
      })
      .catch((err: string) => {
        console.log(err)
      })
  }, [])
  console.log(heroID);
  useEffect(() => {
    FetchHeroComics((heroID ?? ' '))
      .then((result: { data: { data: { results: any }; }; }) => {
        setComics(result.data.data.results);
      })
      .catch((err: string) => {
        console.log(err)
      })
  }, [])
  console.log(comics);

  const navigate = useNavigate();
  function navigateToHeroes() {
    navigate(`/`)
  }

  return (
    <>
    <div>
    <Button className="btn-color:#f78f3f" onClick={() => navigateToHeroes()}>Return</Button>
    </div>
      <div className='container' >
        {(!!comics) && comics.map((comic: ComicElement) =>
          <Card style={{ width: '18rem' }}>
            <Card.Img  variant="top" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
            <Card.Body key={comic.id}>
              <h4>{comic.series.name}</h4>
              <hr></hr>
              <Card.Text>
                {comic.description}
              </Card.Text>

            </Card.Body>
            <br />
            </Card>
        )}
      </div>;
    </>
  )
}