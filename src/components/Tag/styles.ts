import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

//* Usando a props passada no componente
export const TagContainer = styled.div<Props>`
  display: inline-block;
  border-radius: 8px;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  background-color: ${colors.green};
  color: ${colors.white};
`
