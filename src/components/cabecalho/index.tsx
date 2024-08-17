import styled from "styled-components";
import Logo from "./assets/logo.png";
import Perfil from "./assets/perfil.png";


const CabecalhoEstilizado = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`

const LinkEstilizado = styled.a`
 color: var(--azul-claro);
 font-weight: 700;
`

export default function Cabecalho(){
    return(
        <CabecalhoEstilizado>
            <img src={Logo} alt="imagem da lodo da empresa Voll" />
            <Container>
                <img src={Perfil} alt="imagem de perfil do usuario" />
                <LinkEstilizado href="#">Sair</LinkEstilizado>
            </Container>
        </CabecalhoEstilizado>
    );
}