import logoFacebook from "./assets/facebook.png";
import logoWhatsapp from "./assets/whatsapp.png";
import logoGoogle from "./assets/google.png";
import logoInstagram from "./assets/instagram.png";
import styled from "styled-components";

const RodapeEstilizado = styled.footer`
heigth: 100%;
color: white;
padding: 1em;
background-color: var(--azul-escuro);
text-align: center;
`

const ListaEstilizada = styled.ul`
display: flex;
justify-content: space-around;
width: 10%;
margin: 1em auto;
`

const ItemEstilizado = styled.li`
list-style-type: none;
`

export default function Rodape(){
    return(
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <a href="#">
                        <img src={logoFacebook} alt="icone do facebook" />
                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#">
                        <img src={logoWhatsapp} alt="icone do whatsapp" />
                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#">
                        <img src={logoGoogle} alt="icone do Google" />
                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#">
                        <img src={logoInstagram} alt="icone do Instagram" />
                    </a>
                </ItemEstilizado>
            </ListaEstilizada>
            <p>2024 © Desenvolvido por Geraldo Oliveira | Projeto fictício sem fins comerciais</p>
        </RodapeEstilizado>
    );
}