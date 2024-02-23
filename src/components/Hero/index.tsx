import banner from '../../assets/images/fundo_hogwarts.png'
import { Game } from '../../pages/Home'
import Button from '../Button'
import { formatPrice } from '../ProductList'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formatPrice(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {formatPrice(game.prices.old)}</>}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Clique aqui para adicionar ao carrinho"
              variant="primary"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
