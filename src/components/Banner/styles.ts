import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  position: relative;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 560px;
  font-weight: bold;

  .container {
    padding-top: 340px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  //* Posicionando a tag no topo do container
  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Price = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
