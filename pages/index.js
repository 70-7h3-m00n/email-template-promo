import { fetchNotionData, getLastSixMonths, isCurrentMonth } from '../helpers'
import { PostonentsProvider } from 'postonents'
import {
  HeaderLogo,
  EmailWrapper,
  HeaderLinks,
  LeaderboardsMonth,
  LeaderboardsSixMonths,
  Banner,
  Winner,
  Prize,
  FooterContacts,
  FooterLinks,
  Footer
} from '../components'

const Home = ({ data }) => {
  const dataThisMonth = data
    .filter(item => isCurrentMonth(item.month) && item)
    .sort((a, b) => b.result - a.result)
  console.log(dataThisMonth)
  const lastSixMonths = getLastSixMonths()
  const dataLastSixMonths = data.filter(item => {
    let include = false
    lastSixMonths.forEach(month => {
      month.toLowerCase() === item.month.toLowerCase() && (include = true)
    })
    if (include) return item
  })

  return (
    <PostonentsProvider theme={{ typo: { fontFamily: 'Stem, sans-serif' } }}>
      <EmailWrapper>
        <HeaderLogo />
        <HeaderLinks />
        <Banner />
        <Winner data={dataThisMonth} />
        <LeaderboardsMonth data={dataThisMonth} />
        <Prize data={dataLastSixMonths} />
        <LeaderboardsSixMonths data={dataLastSixMonths} />
        <FooterContacts />
        <FooterLinks />
        <Footer />
      </EmailWrapper>
    </PostonentsProvider>
  )
}

export async function getStaticProps(context) {
  const data = await fetchNotionData()

  return {
    props: {
      data
    }
  }
}

export default Home
