import { prizeStyles as stls } from './prizeStyles'
import { Container, Row, Column, Image } from 'postonents'
import {
  toNumberWithSpaces,
  getBestManagerResult
} from '../../helpers'

const Prize = ({ data }) => {

  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column>
          <Image
            src='https://res.cloudinary.com/mipinstitute/image/upload/v1629973139/temp%20ipo%20email/prize_kbgktr.jpg'
            width={600}
            height={378}
            alt='iPhone 13 PRO'
          />
        </Column>
        <Column>
          <h2 style={stls.title}>
            За 5 мил. руб. продаж <br />
            до конца года
          </h2>
          <p style={stls.prize}>iPhone 13 Pro</p>
          <p style={stls.subtitle}>Лучший в гонке</p>
          <p style={stls.p}>
            {getBestManagerResult(data).name}
          </p>
          <p style={stls.subtitle}>Сумма собранных продаж</p>
          <p style={stls.p}>
          {toNumberWithSpaces(getBestManagerResult(data).result)}{' '}
            руб.
          </p>
          <p style={stls.subtitle}>Время гонки</p>
          <p style={stls.p}>до конца года</p>
        </Column>
      </Row>
    </Container>
  )
}

export default Prize
