import styled from "styled-components"

export default function Header() {
  return (
    <>
      <HeaderStyle>
        <H1Style>Agrofit Pro</H1Style>
        <NavStyle>
          <UlStyle>
            <LiStyle>Pragas</LiStyle>
            <LiStyle>Ingredientes Ativos</LiStyle>
            <LiStyle>Produtos Formulados</LiStyle>
            <LiStyle>Produtos Técnicos</LiStyle>
            <LiStyle>Relatórios</LiStyle>
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
    padding: 10px;
    background: rgb(0,156,55);
    background: linear-gradient(90deg, rgba(0,156,55,1) 0%, rgba(254,224,0,1) 100%);
`
const H1Style = styled.h1`
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
`

const UlStyle = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 5;
    justify-content: space-between;
    list-style-type: none;
`
const LiStyle = styled.li`
    
`

const NavStyle = styled.nav`
    
`