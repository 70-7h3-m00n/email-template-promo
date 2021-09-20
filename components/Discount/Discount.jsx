import { DiscountStyles as stls } from './discountStyles'
import { Container, Row, Column } from 'postonents'

const Discount = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column>
          <p style={stls.title}>Ваш промокод на скидку 30%:</p>
          <p style={stls.p}>
            OSEN2021
          </p>
        </Column>
      </Row>
    </Container>
  )
}

export default Discount
