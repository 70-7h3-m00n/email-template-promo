import { bannerStyles as stls } from './bannerStyles'
import {
  Container,
  Row,
  Column,
  Link,
  Image
} from 'postonents'

const Banner = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <h1 style={stls.title}>
          Психология <br />
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
