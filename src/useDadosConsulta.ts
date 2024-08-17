import IConsulta from "./types/IConsulta";
import userFetch from "./userFetch";

const useDadosConsulta = () => {
    return userFetch<IConsulta[]>({url: 'consultas'});
}

export default useDadosConsulta;