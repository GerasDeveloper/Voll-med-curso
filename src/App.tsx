import './App.css'
import Avaliacao from './components/avaliacao'
import Cabecalho from './components/cabecalho'
import Container from './components/container'
import Grafico from './components/grafico'
import Rodape from './components/rodape'
import Tabela from './components/tabela'
import Titulo from './components/titulo'
import useDadosConsulta from './useDadosConsulta'
import useDadosProfissional from './useDadosProfissional'

function App() {
  const {dados: consultas, erro: erroConsulta} = useDadosConsulta();
  const {dados: profissionais, erro: erroProfissiona} = useDadosProfissional();

  if(erroConsulta || erroProfissiona){
    console.log("Ocorreu um error");
  }
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Estilizada</Titulo>
        <Tabela consultas = {consultas}/>
        <Grafico consultas = {consultas} profissionais = {profissionais}/>
        <Avaliacao profissionais={profissionais}/>
      </Container>
      <Rodape />
    </>
  )
}

export default App
