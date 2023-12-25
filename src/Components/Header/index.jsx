import styled from "styled-components"

export default function Header() {
  return (
    <>
      <HeaderStyle>
        <H1Style>Agrofit Pro</H1Style>
        <NavStyle>
          <UlStyle>
            <LiStyle><AStyle>Pragas</AStyle>
            </LiStyle>
            <LiStyle><AStyle>Ingredientes Ativos</AStyle>
            </LiStyle>
            <LiStyle><AStyle>Produtos Formulados</AStyle>
            </LiStyle>
            <LiStyle><AStyle>Produtos Técnicos</AStyle>
            </LiStyle>
            <LiStyle><AStyle>Relatórios</AStyle>
            </LiStyle>
          </UlStyle>
        </NavStyle>
      </HeaderStyle>
    </>
  )
}

const HeaderStyle = styled.header`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px 100px;
    border-bottom: 1px solid var(--green200);
    position: fixed;
    width: 100%;
    background: var(--green100);
`
const H1Style = styled.h1`
    text-align: center;
    color: var(--green700);
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
`

const UlStyle = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 1px;
    justify-content: space-between;
    list-style-type: none;
`
const LiStyle = styled.li`

`

const NavStyle = styled.nav`
    padding: .7rem 0;
`

const AStyle = styled.a`
  text-decoration: none;
  padding: 6px 12px;
  cursor: pointer;
  border: 1px solid var(--green300);
  border-radius:4px;
  font-family: 'Open Sans', sans-serif;
  color: var(--green700);

  &:hover{
    border: 1px solid var(--green300);
    background-color: var(--green700);
    border-radius:4px;
    color: var(--green100);
    transition: ease-in 0.2s;
  }
`