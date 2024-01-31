import styled from 'styled-components'

import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  position: relative;
  border-radius: 8px;
  padding: 8px;
  background-color: ${cores.cinza};

  ${TagContainer} {
    margin-right: 9px;
  }
`

export const Titulo = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.div`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
