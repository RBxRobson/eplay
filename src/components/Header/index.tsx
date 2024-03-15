import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'

import { Link } from '../Footer/styles'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './style'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <S.Logo src={logo} alt="eplay" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  to="/categories"
                  title="Clique aqui para acessar a sessão de categorias"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <Link
                  to="/#coming-soon"
                  title="Clique aqui para acessar a sessão de em breve"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Novidades
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <Link
                  to="/#on-sale"
                  title="Clique aqui para acessar a sessão de promoções"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Promoções
                </Link>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={() => openCart()}>
          {items.length} <span> - produto(s)</span>
          <img src={cart} alt="carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              to="/categories"
              title="Clique aqui para acessar a sessão de categorias"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <Link
              to="/#coming-soon"
              title="Clique aqui para acessar a sessão de em breve"
              onClick={() => setIsMenuOpen(false)}
            >
              Novidades
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <Link
              to="/#on-sale"
              title="Clique aqui para acessar a sessão de promoções"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </Link>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
