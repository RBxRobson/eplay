import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, LinkCart, Logo } from './style'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <Logo src={logo} alt="eplay" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categorias">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <LinkCart href="#">
        0 - produto(s)
        <img src={carrinho} alt="carrinho" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
