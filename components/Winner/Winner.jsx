import { winnerStyles as stls } from './winnerStyles'
import { Container, Row, Column, Image } from 'postonents'
import {
  getMonthFromNum,
  getCurrentMonthNum,
  toNumberWithSpaces,
  getBestManagerResult
} from '../../helpers'

const Winner = ({ data }) => {

  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column>
          <Image
            src='https://res.cloudinary.com/mipinstitute/image/upload/v1629973173/temp%20ipo%20email/winner_c3uqcf.jpg'
            width={600}
            height={332}
            alt='Лидер'
          />
        </Column>
        <Column>
          <h2 style={stls.title}>Премия за объем продаж</h2>
          <p style={stls.prize}>30 000 тыс. руб.</p>
          <p style={stls.subtitle}>Лучший в гонке</p>
          <p style={stls.p}>{getBestManagerResult(data).name}</p>
          <p style={stls.subtitle}>Сумма собранных продаж</p>
          <p style={stls.p}>
            {toNumberWithSpaces(getBestManagerResult(data).result)}{' '}
            руб.
          </p>
          <p style={stls.subtitle}>Время гонки</p>
          <p style={stls.p}>
            {getMonthFromNum(
              getCurrentMonthNum(data[0].month) - 1
            ).toLowerCase()}
            -{data[0].month.toLowerCase()}
          </p>
        </Column>
      </Row>
    </Container>
  )
}

export default Winner
