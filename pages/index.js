import {
  Email,
  Container,
  Row,
  Column,
  Header,
  FullWidth,
  Footer,
  Text,
  Link,
  PostonentsProvider
} from 'postonents'
import { homePageStyles as stls } from '../jsStyles/homePageStyles'

import { fetchNotionData } from '../helpers'

const Home = ({ data = { verifyToken: '' }, managersData }) => {
  const { verifyToken } = data
  console.log(managersData)
  return (
    <PostonentsProvider theme={{ typo: { fontFamily: 'Stem, sans-serif' } }}>
      <Email
        lang='ru'
        title='МИПО - Премия за объем продаж и iPhone 13 PRO'
        headStyles="
          @font-face{
            font-display: swap;
            font-family: Stem;
            src: local(Stem), url(/assets/fonts/stem/Stem-Light.eot);
            src: local(Stem), url(/assets/fonts/stem/Stem-Light.eot?iefix) format('embedded-opentype'), url(/assets/fonts/stem/Stem-Light.ttf) format('truetype'), url(/assets/fonts/stem/Stem-Light.woff) format('woff'), url(/assets/fonts/stem/Stem-Light.woff2) format('woff2');
            font-style: normal;
            font-weight: 300;
          }
          @font-face{
            font-display: swap;
            font-family: Stem;
            src: local(Stem), url(/assets/fonts/stem/Stem-SemiLight.eot);
            src: local(Stem), url(/assets/fonts/stem/Stem-SemiLight.eot?iefix) format('embedded-opentype'), url(/assets/fonts/stem/Stem-SemiLight.ttf) format('truetype'), url(/assets/fonts/stem/Stem-SemiLight.woff) format('woff'), url(/assets/fonts/stem/Stem-SemiLight.woff2) format('woff2');
            font-style: normal;
            font-weight: 400;
          }
          @font-face{
            font-display: swap;
            font-family: Stem;
            src: local(Stem), url(/assets/fonts/stem/Stem-Medium.eot);
            src: local(Stem), url(/assets/fonts/stem/Stem-Medium.eot?iefix) format('embedded-opentype'), url(/assets/fonts/stem/Stem-Medium.ttf) format('truetype'), url(/assets/fonts/stem/Stem-Medium.woff) format('woff'), url(/assets/fonts/stem/Stem-Medium.woff2) format('woff2');
            font-style: normal;
            font-weight: 500;
          }
          body { 
            background-color: white; 
          }
        "
        // headLinks={[
        //   {
        //     type: 'link',
        //     props: {
        //       rel: 'stylesheet',
        //       href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700'
        //     }
        //   }
        // ]}
      >
        <Header
          logo='/assets/imgs/logo.png'
          title={
            <>
              Московский институт <br /> профессионального образования
            </>
          }
          logoHeight={68}
          style={stls.headerLogoContainer}></Header>
        <Header style={stls.headerLinksContainer}>
          <Row>
            <Column>
              <Link
                href={`https://ipo.msk.ru/professionalnaja-perepodgotovka/`}
                style={{ color: '#000' }}>
                Профессии
              </Link>
              <Link
                href={`https://ipo.msk.ru/povyshenie-kvalifikacii/`}
                style={{ color: '#000' }}>
                Курсы
              </Link>
              <Link
                href={`https://ipo.msk.ru/mba-1/`}
                style={{ color: '#000' }}>
                MBA
              </Link>
            </Column>
          </Row>
        </Header>
        <Container alignment='center'>
          <Row>
            <Column>
              <Text fontSize={20} fontWeight={300}>
                Hello,
              </Text>
            </Column>
            <Column style={{ marginBottom: 24 }}>
              <Text fontSize={20} fontWeight={300}>
                {managersData[0].name}
                You just registered with the following email. To verify this
                email please click on the link or the text link below.
              </Text>
            </Column>
            <Column style={{ marginBottom: 24, textAlign: 'center' }}>
              <Link
                href={`https://example.com/verify/${verifyToken}`}
                type='primary'>
                Verify your email
              </Link>
            </Column>
            <Column style={{ marginBottom: 24, textAlign: 'center' }}>
              <Link
                href={`https://example.com/verify/${verifyToken}`}>{`https://example.com/verify/${verifyToken}`}</Link>
            </Column>
          </Row>
        </Container>
        <FullWidth style={{ marginBottom: 24 }}>
          <Container alignment='center'>
            <Row>
              <Column>
                <Text>Any other questions? We are happy to help!</Text>
              </Column>
              <Column small={6}>
                <Link
                  href='https://support.example.com'
                  fullWidth
                  type='hollow'>
                  Help Center
                </Link>
              </Column>
              <Column small={6}>
                <Link href='mailto:info@example.com' fullWidth type='hollow'>
                  Email
                </Link>
              </Column>
            </Row>
          </Container>
        </FullWidth>
        <Footer style={{ color: 'white' }}>
          <Container alignment='center'>
            <Row>
              <Column
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  lineHeight: '16px',
                  fontWeight: 300
                }}>
                Copyright © 2018 NBC, all rights reserved
                <br />
                registered in the commercial register Narnia
              </Column>
            </Row>
          </Container>
        </Footer>
      </Email>
    </PostonentsProvider>
  )
}

export async function getStaticProps(context) {
  const managersData = await fetchNotionData()

  const data = { verifyToken: '' }

  return {
    props: {
      data,
      managersData
    }
  }
}

export default Home
