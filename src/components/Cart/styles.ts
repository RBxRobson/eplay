import styled from 'styled-components'

import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import closeIcon from '../../assets/images/close 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

export const SideBar = styled.aside`
  z-index: 1;
  background-color: ${cores.cinza};
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  button {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branca};

  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  gap: 24px;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 8px 0;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${cores.branca};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.branca};
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0px;
  }

  button {
    position: absolute;
    top: 8px;
    right: 0;
    background-image: url(${closeIcon});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
  }
`
