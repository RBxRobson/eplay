import styled from 'styled-components'

export const Imagem = styled.div`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 560px;
  padding-top: 340px;
  font-weight: bold;
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
