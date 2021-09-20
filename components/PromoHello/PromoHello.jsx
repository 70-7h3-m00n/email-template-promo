import { PromoHelloStyles as stls } from './promoHelloStyles'
import { Container, Row, Column } from 'postonents'

const PromoHello = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column>
          <h3 style={stls.title}>Здравствуйте!</h3>
          <p style={stls.p}>
            Вы интересовались обучением психологии, но возможно не нашли
            подходящего вам графика. Недавно мы сформировали новые группы, а
            также дополнили новыми, интересными профессиями и приглашаем вас
            познакомиться с новыми профессиями и сроками обучения.
          </p>
          <p style={stls.p}>
            На все программы психологии, действует скидка, от конечной стоимости
            указанной на сайте. Как же ее получить ?
          </p>
        </Column>
      </Row>
    </Container>
  )
}

export default PromoHello
