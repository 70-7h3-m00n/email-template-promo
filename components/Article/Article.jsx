import { articleStyles as stls } from './articleStyles'
import { Container, Row, Column, Link } from 'postonents'

const Article = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <p style={stls.title}>
            Организация <br /> здорового питания
          </p>
          <p style={stls.p}>
            Правильное, рациональное или здоровое питание каждого человека
            подразумевает поступление с пищей полезных веществ в оптимальном
            количестве, соотношении. Что дает сбалансированное питание? Его
            преимущества бесценны: профилактика многих заболеваний, в том числе
            сахарного диабета, ожирения, а также повышение иммунитета,
            укрепление всех систем нашего организма, снижение стресса. Кроме
            того, бонусами идут повышение настроения и уровня энергичности,
            отсутствие лишнего веса, улучшение обмена веществ, внешнего вида
          </p>
          <Link href={'https://ipo.msk.ru'} style={stls.btn}>
            Перейти к статье
          </Link>
        </Column>
      </Row>
    </Container>
  )
}

export default Article
