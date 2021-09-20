import { bannerStyles as stls } from './bannerStyles'
import { Container, Row, Column, Link } from 'postonents'

const Banner = ({ type }) => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls[type]}>
          <h1 style={stls.title}>
            {type === 'psychology' ? (
              <>Психология</>
            ) : type === 'management' ? (
              <>Менеджмент</>
            ) : type === 'tech' ? (
              <>Технические <br /> направления</>
            ) : (
              ''
            )}
            <br />
            вместе с НАНО <br />
            «ИПО»
          </h1>
          {/* <Link href={'https://ipo.msk.ru/'} style={stls.btn}>
            Перейти на сайт
          </Link> */}
        </Column>
      </Row>
    </Container>
  )
}

export default Banner
