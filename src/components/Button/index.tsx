import { ButtonContainer, ButtonLink } from './styles'

//* Criando uma tipagem para reutilizar o componente
export type Props = {
  type: 'button' | 'link'
  title: string
  //* Endereço para caso de link
  to?: string
  //* onClick para caso de botão
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
