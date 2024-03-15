import styled from 'styled-components'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input,
  select {
    border: 1px solid ${colors.gray};
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  border: none;
  height: 32px;
  margin-right: 16px;
  padding: 0 8px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
`
