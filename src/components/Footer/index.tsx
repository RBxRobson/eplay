import * as S from './styles'

const CurrentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de RPG"
                to="/categories#rpg"
              >
                RPG
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de ação"
                to="/categories#action"
              >
                Ação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de luta"
                to="/categories#fight"
              >
                Luta
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de esportes"
                to="/categories#sports"
              >
                Esportes
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de simulação"
                to="/categories#simulation"
              >
                Simulação
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso Rápido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar a sessão de promoções"
                to="/categories"
              >
                Categorias
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar a sessão de em breve"
                to="/#coming-soon"
              >
                Em breve
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar a sessão de promoções"
                to="/#on-sale"
              >
                Promoções
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <p>{CurrentYear} - &copy; E-Play Todos os direitos reservados</p>
      </div>
    </S.Container>
  )
}

export default Footer
