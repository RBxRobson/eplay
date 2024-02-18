import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  font-size: 14px;
  padding: 32px 0;
  background-color: ${cores.cinza};
`

export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  gap: 8px;
`

export const Link = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`