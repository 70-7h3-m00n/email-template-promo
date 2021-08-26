import { bannerStyles as stls } from './bannerStyles'
import {
  Container,
  Row,
  Column,
  Header,
  FullWidth,
  Footer,
  Text,
  Link,
  Image,
  PostonentsProvider
} from 'postonents'

const Banner = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column>
          <Image
            src='/assets/imgs/banner.jpg'
            width={600}
            height={300}
            alt='Банер'
          />
        </Column>
        <Column>
          <h1 style={stls.title}>
            Московский <br />
            институт <br />
            профессионального <br />
            образования
          </h1>
          <Link href={'https://ipo.msk.ru/'} style={stls.btn}>
            Перейти на сайт
          </Link>
        </Column>
        <Column style={{ marginBottom: 24, textAlign: 'center' }}>
          <Link href={`https://example.com/`}>{`https://example.com/`}</Link>
        </Column>
      </Row>
    </Container>
  )
}

export default Banner
