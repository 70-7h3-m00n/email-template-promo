import { ctaStyles as stls } from './ctaStyles'
import { Container, Row, Column, Link } from 'postonents'

const Cta = ({ type }) => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls[type]}>
          <h2 style={stls.title}>
            Обновленные <br /> профессии{' '}
            {type === 'psychology' ? (
              <>психологии</>
            ) : type === 'management' ? (
              <>менеджмента</>
            ) : type === 'tech' ? (
              <>
                технических <br /> направлений
              </>
            ) : (
              ''
            )}
          </h2>
          <p style={stls.subtitle}>20 сентября - 06 октября</p>
          <p style={stls.info}>Акция действует до конц августа</p>
          <Link
            href={
              type === 'psychology'
                ? 'https://ipo.msk.ru/professionalnaja-perepodgotovka/psihologija/?utm_source=post-psyhology&utm_medium=cpm&utm_content=post-psyhology'
                : type === 'management'
                ? 'https://ipo.msk.ru/professionalnaja-perepodgotovka/menedzhment/?utm_source=post-menegment&utm_medium=cpm&utm_content=post-menegment'
                : type === 'tech'
                ? 'https://ipo.msk.ru/professionalnaja-perepodgotovka/?utm_source=post-tech&utm_medium=cpm&utm_content=post-tech'
                : 'https://ipo.msk.ru?utm_source=post-tech&utm_medium=cpm&utm_content=post-tech'
            }
            style={stls.btn}>
            Выбрать программу
          </Link>
        </Column>
      </Row>
    </Container>
  )
}

export default Cta
