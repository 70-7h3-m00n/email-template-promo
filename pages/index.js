import { PostonentsProvider } from 'postonents'
import {
  HeaderLogo,
  PromoHello,
  Discount,
  EmailWrapper,
  HeaderLinks,
  Banner,
  Cta,
  Article,
  FooterContacts,
  FooterLinks,
  Footer
} from '../components'

const Home = ({ type }) => {
  return (
    <PostonentsProvider theme={{ typo: { fontFamily: 'Stem, sans-serif' } }}>
      <EmailWrapper>
        <HeaderLogo />
        <HeaderLinks />
        <Banner type={type} />
        <PromoHello type={type} />
        <Discount />
        <Cta type={type} />
        <Article type={type} />
        <FooterContacts />
        <FooterLinks />
        <Footer />
      </EmailWrapper>
    </PostonentsProvider>
  )
}

export async function getStaticProps(context) {
  // const data = await fetchNotionData()
  const type = 'psychology' // psychology & managment & tech

  return {
    props: {
      type
    }
  }
}

export default Home
