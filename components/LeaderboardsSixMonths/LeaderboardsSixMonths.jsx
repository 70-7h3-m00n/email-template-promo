import { leaderboardsSixMonthsStyles as stls } from './leaderboardsSixMonthsStyles'
import { Container, Row, Column } from 'postonents'
import { getBestManagerResult } from '../../helpers'

const LeaderboardsSixMonths = ({ data }) => {
  const names = [...new Set(data.map(item => item.name))]
  const managersData = names.map(name => {
    let result = 0
    let plan = 0
    
    data.forEach(item => item.name === name && ((result += item.result) && (plan += item.plan)))
    return {name, result, plan}
  }).sort((a, b) => b.result - a.result)
  const bestResult = getBestManagerResult(data).result
  const bestResultOnePercent = bestResult / 100
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column>
          <h3 style={stls.title}>iPhone 13 Pro</h3>
          <p style={stls.p}>
            Описание условий. Ежеквартальная премия начисляется не позже
            10-числа месяца, следующего за прошедшим отработанным кварталом;
            годовая премия должна быть начислена с срок не позже 10-ти дней
            после утверждения годовой бухгалтерской отчетности;
            непроизводственные премии можно начислять и выплачивать в любой срок
          </p>
        </Column>
      </Row>

      <Row>
        <Column style={stls.fullWidth}>
          <p style={stls.leadersTitle}>Ближайший участник к лидеру гонки</p>
          {managersData.map(
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
                  <div style={stls.iPhoneIcon}></div>
                  
                </div>
              )
          )}
        </Column>
      </Row>
    </Container>
  )
}

export default LeaderboardsSixMonths
