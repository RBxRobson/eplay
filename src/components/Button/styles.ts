import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`
//* Herdando os estilos do ButtonContainer mas alterando a tag para o Link do React Router
export const ButtonLink = styled(ButtonContainer).attrs({ as: Link })`
  text-decoration: none;
`
