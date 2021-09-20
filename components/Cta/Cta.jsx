import { ctaStyles as stls } from './ctaStyles'
import { Container, Row, Column, Link } from 'postonents'
import {
  getMonthFromNum,
  getCurrentMonthNum,
  toNumberWithSpaces,
  getBestManagerResult
} from '../../helpers'

const Cta = () => {

  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <h2 style={stls.title}>Обновленные <br /> профессии психологии</h2>
          <p style={stls.subtitle}>20 сентября - 06 октября</p>
          <p style={stls.info}>Акция действует до конц августа</p>
          <Link href={'https://ipo.msk.ru/professionalnaja-perepodgotovka/psihologija/'} style={stls.btn}>
            Выбрать программу
          </Link>
        </Column>
      </Row>
    </Container>
  )
}

export default Cta
