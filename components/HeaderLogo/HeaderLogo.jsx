import { headerLogoStyles as stls } from './headerLogoStyles'
import {
  Header,
} from 'postonents'

const HeaderLogo = () => {
  return (
    <Header
      logo='/assets/imgs/logo.png'
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
