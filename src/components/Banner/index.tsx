import { useEffect, useState } from 'react'

import { Imagem, Precos, Titulo } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { formatPrice } from '../ProductList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formatPrice(game.prices.old)}</span> <br />
            por apenas {formatPrice(game.prices.discount)}
          </Precos>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar o produto"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
