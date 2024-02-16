import banner from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

const Hero = () => {
  return (
    <Banner style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <Infos>
          <h2>Hogwards Legacy</h2>
          <p>
            <span>De R$ 250,00</span>
            por R$ 199,00
          </p>
          <Button
            type="button"
            title="Clique aqui para adicionar ao carrinho"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
