import { homePageStyles as stls } from '../jsStyles/homePageStyles'
import { fetchNotionData } from '../helpers'
import {
  Container,
  Row,
  Column,
  Header,
  FullWidth,
  Text,
  Link,
  Image,
  PostonentsProvider
} from 'postonents'
import {
  HeaderLogo,
  EmailWrapper,
  HeaderLinks,
  Banner,
  FooterContacts,
  FooterLinks,
  Footer
} from '../components'

const Home = ({ managersData }) => {
  console.log(managersData)
  return (
    <PostonentsProvider theme={{ typo: { fontFamily: 'Stem, sans-serif' } }}>
      <EmailWrapper>
        <HeaderLogo />
        <HeaderLinks />
        <Banner />
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
        <FooterContacts />
        <FooterLinks />
        <Footer />
      </EmailWrapper>
    </PostonentsProvider>
  )
}

export async function getStaticProps(context) {
  const managersData = await fetchNotionData()

  return {
    props: {
      managersData
    }
  }
}

export default Home
