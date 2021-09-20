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
                ? 'https://ipo.msk.ru/professionalnaja-perepodgotovka/psihologija/'
                : type === 'management'
                ? 'https://ipo.msk.ru/professionalnaja-perepodgotovka/menedzhment/'
                : type === 'tech'
                ? 'https://ipo.msk.ru/professionalnaja-perepodgotovka/'
                : 'https://ipo.msk.ru'
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
