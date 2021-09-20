import { headerLogoStyles as stls } from './headerLogoStyles'
import {
  Header,
} from 'postonents'

const HeaderLogo = () => {
  return (
    <Header
      logo='https://res.cloudinary.com/npoipe/image/upload/v1632140739/email%20template%20promo/logo_hmhjhi.png'
      title={
        <>
          Московский институт <br /> профессионального образования
        </>
      }
      logoHeight={68}
      style={stls.container}></Header>
  )
}

export default HeaderLogo
