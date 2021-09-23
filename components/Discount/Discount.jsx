import { DiscountStyles as stls } from './discountStyles'
import { Container, Row, Column } from 'postonents'

const Discount = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row style={stls.fullwidth}>
        <Column style={stls.fullwidth}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>Ваш промокод на скидку 30%:</p>
            <p style={stls.p} align='center'>
              SEP21
            </p>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Discount
