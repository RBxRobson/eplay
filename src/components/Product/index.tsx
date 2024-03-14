import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  infos: string[]
  title: string
  category: string
  system: string
  description: string
  image: string
  id: number
}

const Product = ({
  infos,
  title,
  category,
  system,
  description,
  image,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }

    return description
  }

  return (
    <Card
      title={`Clique aqui para ver mais detalhes do jogo ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescription(description)}</Descricao>
    </Card>
  )
}

export default Product
