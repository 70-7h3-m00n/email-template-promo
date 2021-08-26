import { leaderboardsSixMonthsStyles as stls } from './leaderboardsSixMonthsStyles'
import { Container, Row, Column, Image } from 'postonents'

const LeaderboardsSixMonths = ({ data }) => {

  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column>
          leaderboards
        </Column>
      </Row>
    </Container>
  )
}

export default LeaderboardsSixMonths
