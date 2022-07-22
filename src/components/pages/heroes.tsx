import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import '/home/learn/Escritorio/projects/learning react/Marvel-SPA/marvel-heroes/src/components/pages/heroes.css'
import { Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HeroData } from '../interfaces';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FetchHeroes } from '../services/heroesServices/fetchHeroes';

export function Heroes() {
  const [heroID, setHeroID] = useState<number>();
  const navigate = useNavigate();
  const [heroes, setHeroes] = useState<HeroData[]>([]);

  const [limit, setLimit] = useState(4);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    console.log('here');

    fetchNextPage()
  }, [])
  console.log(heroes);

  const heroId = (heroID: number) => {
    setHeroID(heroID);
    navigate(`/heroe/${heroID}`);
  }

  async function fetchNextPage() {
    setOffset((prevOffset) => ((prevOffset ?? limit) + limit));

    try {
      const result = await FetchHeroes(limit, offset);
      setHeroes((prevState) => (prevState ?? []).concat(...(result.data.data.results)));
    } catch (error) {
      console.log(error)
    }
    console.log('olá daqui');
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
              <Row xs={1} md={2} lg={4} className="g-4">
                {heroes.map(hero =>
                  <>
                    <Col key={hero.id}>
                      <Card style={{ width: '18rem' }}>
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


