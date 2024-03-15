import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  border-radius: 8px;
  padding: 24px;
  background-color: ${colors.gray};
  margin-bottom: 40px;

  h2,
  h3 {
    font-weight: bold;
    font-size: 18px;
    color: ${colors.white};
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
