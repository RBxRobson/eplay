import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`
//* Herdando os estilos do ButtonContainer mas alterando a tag para o Link do React Router
export const ButtonLink = styled(ButtonContainer).attrs({ as: Link })`
  text-decoration: none;
`
