import { TagContainer } from './styles'

//* Criando uma tipagem para reutilizar o componente
export type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ children, size = 'small' }: Props) => {
  return <TagContainer size={size}>{children}</TagContainer>
}

export default Tag
