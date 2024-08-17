import  Card from "./card";
import IProfissional from "../../types/IProfissional";

function Avaliacao({profissionais} : {profissionais: IProfissional[] | null}){
    return(
        <section>
            {profissionais?.map((profissional) => {
                return <Card profissional={profissional} />
            })}
        </section>
    )
}

export default Avaliacao;