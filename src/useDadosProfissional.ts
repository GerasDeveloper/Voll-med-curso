import IProfissional from "./types/IProfissional";
import useFetch from "./userFetch";

const useDadosProfissional = () => {
    return useFetch<IProfissional[]>({ url: 'profissionais'});
}

export default useDadosProfissional;