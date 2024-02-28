import Button from '../Button'
import Tag from '../Tag'

import img from '../../assets/images/zelda.png'

import * as S from './styles'

const Cart = () => {
  return (
    <S.CartContainer>
      <S.Overlay />
      <S.SideBar>
        <ul>
          <S.CartItem>
            <img src={img} />
            <div>
              <h3>Nome do game</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>price</span>
            </div>
            <button type="button" />
          </S.CartItem>
          <S.CartItem>
            <img src={img} />
            <div>
              <h3>Nome do game</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>price</span>
            </div>
            <button type="button" />
          </S.CartItem>
        </ul>
        <S.Quantity>jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de
          <span>Em até sem juros</span>
        </S.Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
