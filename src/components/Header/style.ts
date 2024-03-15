import styled, { keyframes } from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 0;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }
`

export const NavMobile = styled.nav`
  display: none;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;

  &.is-open {
    max-height: 200px;
    overflow: auto;
  }

  a {
    margin-left: 6px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const CartButton = styled.a`
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }

  img {
    margin-left: 8px;
    cursor: pointer;
  }
`

export const Logo = styled.img`
  margin-left: 16px;
`

export const Hamburguer = styled.div`
  width: 32px;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 16px;
  }

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`
