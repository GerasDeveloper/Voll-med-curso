import avaliacao from "./assets/avaliacao.png";
import consulta from "./assets/consulta.png";
import grafico from "./assets/grafico.png";
import styled from "styled-components";

interface Props{
    imagem?: string,
    children?: React.ReactNode
}

interface IImagem{
    grafico: string,
    avaliacao: string,
    consulta: string
}

const SpanEstilizado = styled.span<Props>`
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 25px;
heigth: 25px;
background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'}

`
const TituloEstilizado = styled.h2`
color: var(--azul-claro);
`

const Container = styled.div`
display: flex;
align-items: center;

`

export default function Titulo({imagem, children} : Props){
    
    const listaDeImagem: IImagem = {
        avaliacao : avaliacao,
        grafico : grafico,
        consulta : consulta
    }

    return(
        <Container>
            {imagem && <SpanEstilizado imagem={listaDeImagem[imagem as keyof IImagem]}/> }
            <TituloEstilizado>{children}</TituloEstilizado>
        </Container>
    )
}