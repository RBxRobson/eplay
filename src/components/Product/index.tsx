import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  infos: string[]
  title: string
  category: string
  system: string
  description: string
  image: string
}

const Product = ({
  infos,
  title,
  category,
  system,
  description,
  image
}: Props) => {
  return (
    <Card>
      <img src={image} alt="" />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{description}</Descricao>
    </Card>
  )
}

export default Product
