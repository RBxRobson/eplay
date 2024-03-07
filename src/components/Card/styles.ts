import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  border-radius: 8px;
  padding: 24px;
  background-color: ${cores.cinza};
  margin-bottom: 40px;

  h2,
  h3 {
    font-weight: bold;
    font-size: 18px;
    color: ${cores.branca};
    margin-bottom: 24px;
  }

  .mg-top {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
