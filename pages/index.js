import { homePageStyles as stls } from '../jsStyles/homePageStyles'
import { fetchNotionData } from '../helpers'
import {
  Container,
  Row,
  Column,
  Header,
  FullWidth,
  Footer,
  Text,
  Link,
  Image,
  PostonentsProvider
} from 'postonents'
import { HeaderLogo, EmailWrapper, HeaderLinks } from '../components'

const Home = ({ data = { verifyToken: '' }, managersData }) => {
  const { verifyToken } = data
  console.log(managersData)
  return (
    <PostonentsProvider theme={{ typo: { fontFamily: 'Stem, sans-serif' } }}>
      <EmailWrapper>
        <HeaderLogo />
        <HeaderLinks />
        <Container alignment='center'>
          <Row>
            <Column>
              <h1>test</h1>
              <Image
                src='/assets/imgs/banner.jpg'
                width={600}
                height={300}
                alt='Банер'
              />
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
      </EmailWrapper>
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
