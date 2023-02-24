import filtros from './filtros.json';
import styles from './Filtros.module.scss'


type IOpcao = typeof filtros[0];

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number|null>>;
}

export default function Filtros({filtro, setFiltro}: Props){
    function selecionarFiltro(opcao: IOpcao){
        return setFiltro(opcao.id)
    }
    return (
        <div className={styles.filtros}>
            {filtros.map((opcao: IOpcao) => (
                <button className={styles.filtros__filtros} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}