import { articleStyles as stls } from './articleStyles'
import { Container, Row, Column, Link } from 'postonents'

const Article = ({ type }) => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls[type]}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>
              {type === 'psychology' ? (
                <>
                  Организация <br /> здорового питания
                </>
              ) : type === 'management' ? (
                <>
                  PR на миллиард: чему учит <br /> бизнес история apple
                </>
              ) : type === 'tech' ? (
                <>
                  Организация <br /> здорового питания
                </>
              ) : (
                ''
              )}
            </p>
            <p style={stls.p}>
              {type === 'psychology' ? (
                <>
                  Правильное, рациональное или здоровое питание каждого человека
                  подразумевает поступление с пищей полезных веществ в
                  оптимальном количестве, соотношении. Что дает сбалансированное
                  питание? Его преимущества бесценны: профилактика многих
                  заболеваний, в том числе сахарного диабета, ожирения, а также
                  повышение иммунитета, укрепление всех систем нашего организма,
                  снижение стресса. Кроме того, бонусами идут повышение
                  настроения и уровня энергичности, отсутствие лишнего веса,
                  улучшение обмена веществ, внешнего вида
                </>
              ) : type === 'management' ? (
                <>
                  Давайте выясним, как же Apple использует связи с
                  общественностью? Будь то новый iPhone, iWatch или iPad, Apple
                  определенно знает, как создать ажиотаж. В то время как другие
                  компании пытаются привлечь к себе внимание, компания Apple без
                  особых усилий доминирует в СМИ, не говоря уже о захваченных
                  сердцах и умах клиентов, которые раз за разом отдают
                  предпочтение своему кумиру. В чем их секрет? Три слова: гений
                  по связям с общественностью
                </>
              ) : type === 'tech' ? (
                <>
                  Правильное, рациональное или здоровое питание каждого человека
                  подразумевает поступление с пищей полезных веществ в
                  оптимальном количестве, соотношении. Что дает сбалансированное
                  питание? Его преимущества бесценны: профилактика многих
                  заболеваний, в том числе сахарного диабета, ожирения, а также
                  повышение иммунитета, укрепление всех систем нашего организма,
                  снижение стресса. Кроме того, бонусами идут повышение
                  настроения и уровня энергичности, отсутствие лишнего веса,
                  улучшение обмена веществ, внешнего вида
                </>
              ) : (
                ''
              )}
            </p>
            <Link
              href={
                type === 'psychology'
                  ? 'https://ipo.msk.ru/novosti/organizatsija-zdorovogo-pitanija/?utm_source=post-psyhology&utm_medium=cpm&utm_content=post-psyhology'
                  : type === 'management'
                  ? 'https://ipo.msk.ru/novosti/pr-na-milliard-chemu-uchit-biznes-istorija-apple/?utm_source=post-menegment&utm_medium=cpm&utm_content=post-menegment'
                  : type === 'tech'
                  ? 'https://ipo.msk.ru/novosti/organizatsija-zdorovogo-pitanija/?utm_source=post-tehnoch&utm_medium=cpm&utm_content=post-tehnoch'
                  : 'https://ipo.msk.ru/novosti/organizatsija-zdorovogo-pitanija/?utm_source=post-tehnoch&utm_medium=cpm&utm_content=post-tehnoch'
              }
              style={stls.btn}>
              Перейти к статье
            </Link>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Article
