import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { Link } from '../Footer/styles'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Logo,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './style'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <Logo src={logo} alt="eplay" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link
                  to="/categories"
                  title="Clique aqui para acessar a sessão de categorias"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <Link
                  to="/#coming-soon"
                  title="Clique aqui para acessar a sessão de em breve"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Novidades
                </Link>
              </LinkItem>
              <LinkItem>
                <Link
                  to="/#on-sale"
                  title="Clique aqui para acessar a sessão de promoções"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Promoções
                </Link>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={() => openCart()}>
          {items.length} <span> - produto(s)</span>
          <img src={carrinho} alt="carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link
              to="/categories"
              title="Clique aqui para acessar a sessão de categorias"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <Link
              to="/#coming-soon"
              title="Clique aqui para acessar a sessão de em breve"
              onClick={() => setIsMenuOpen(false)}
            >
              Novidades
            </Link>
          </LinkItem>
          <LinkItem>
            <Link
              to="/#on-sale"
              title="Clique aqui para acessar a sessão de promoções"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </Link>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
