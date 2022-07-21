import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import '/home/learn/Escritorio/projects/learning react/Marvel-SPA/marvel-heroes/src/components/pages/heroes.css'
import { Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HeroData } from '../interfaces';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FetchHeroes } from '../services/heroesServices/fetchHeroes';

export function Heroes() {
  const [heroes, setHeroes] = useState<HeroData[]>();
  const [heroID, setHeroID] = useState<number>();
  const navigate = useNavigate();

  const limit = 8;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    FetchHeroes(limit, offset)
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

  function fetchNextPage() {
   

    FetchHeroes(limit, offset)
      .then((result: { data: { data: { results: HeroData[] }; }; }) => {
        setHeroes((prevState) => (prevState ?? []).concat(...(result.data.data.results)));
      })
      .catch((err: string) => {
        console.log(err)
      })
      setOffset((prevOffset) => (prevOffset + limit));

  }

  return (
    <>
      {
        (!!heroes) && (
          <div className='container'>
            <InfiniteScroll
              dataLength={heroes.length}
              next={fetchNextPage}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              <Row  xs={1} md={2} lg={4} className="g-4">
                {heroes.map(hero =>
                  <>
                    <Col>
                      <Card style={{ width: '18rem' }} key={hero.id}>
                        <Card.Img variant="top" src={`${hero.thumbnail?.path}.jpg`} />
                        <Card.Body key={hero.id}>
                          <h3>{hero.name}</h3>
                          ID:{hero.id}
                          <hr></hr>
                          <Card.Text className='text-CardText'>
                            {hero.description}
                          </Card.Text>
                        </Card.Body>
                        <Button className="btn-color: #f78f3f" onClick={() => heroId(hero.id)}>Comics</Button>
                      </Card>
                    </Col>
                  </>
                )}
              </Row>
            </InfiniteScroll>
          </div>
        )
      }
    </>
  )
}


