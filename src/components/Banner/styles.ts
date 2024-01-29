import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 560px;
  font-weight: bold;

  .container {
    padding-top: 340px;
    position: relative;
  }

  //* Posicionando a tag no topo do container
  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
