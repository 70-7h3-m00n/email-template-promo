import { footerContactsStyles as stls } from './footerContactsStyles'
import { Row, Column, Footer, Link, Text } from 'postonents'

const FooterContacts = () => {
  return (
    <Footer style={stls.container}>
      <Row>
        <Column>
          <Link
            href={`https://ipo.msk.ru/professionalnaja-perepodgotovka/`}
            style={stls.link}>
            ПРОФЕССИИ
          </Link>
          <Text style={stls.separator}>|</Text>
          <Link
            href={`https://ipo.msk.ru/povyshenie-kvalifikacii/`}
            style={stls.link}>
            КУРСЫ
          </Link>
          <Text style={stls.separator}>|</Text>
          <Link href={`https://ipo.msk.ru/mba-1/`} style={stls.link}>
            MBA
          </Link>
        </Column>
      </Row>
    </Footer>
  )
}

export default FooterContacts
