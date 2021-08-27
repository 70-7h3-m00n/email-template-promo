import { leaderboardsMonthStyles as stls } from './leaderboardsMonthStyles'
import { Container, Row, Column } from 'postonents'
import { getBestManagerResult } from '../../helpers'

const LeaderboardsMonth = ({ data }) => {
  const bestResult = getBestManagerResult(data).result
  const bestResultOnePercent = bestResult / 100
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column>
          <h3 style={stls.title}>Ежеквартальная премия</h3>
          <p style={stls.p}>
            Ежеквартальная премия начисляется не позже 10-числа месяца,
            следующего за прошедшим отработанным кварталом; годовая премия
            должна быть начислена с срок не позже 10-ти дней после утверждения
            годовой бухгалтерской отчетности; непроизводственные премии можно
            начислять и выплачивать в любой срок
          </p>
          
        </Column>
      </Row>
      <Row>
        <Column style={stls.fullWidth}>
          <p style={stls.leadersTitle}>Ближайший участник к лидеру гонки</p>
          {data.map(
            (item, idx) =>
              idx !== 0 && (
                <div key={item.name + idx} style={stls.fullWidth}>
                  <span style={stls.name}>{item.name}</span>{' '}
                  <div style={stls.progressBar}>
                    <div
                      style={{
                        display: 'inline-block',
                        width:
                          Math.floor(
                            item.result / bestResultOnePercent
                          ).toString() + '%',
                        backgroundColor: '#3290FF'
                      }}>
                      &#x200B;
                    </div>
                  </div>
                  <span style={stls.rubSymbol}>&#x20bd;</span>
                </div>
              )
          )}
        </Column>
      </Row>
    </Container>
  )
}

export default LeaderboardsMonth
