import { FerramentasDaListagem } from '../../components';
import { LayoutBaseDePagina } from '../../layouts';

export const Dashboard = () => {
    return (
        <LayoutBaseDePagina titulo='Pagina inicial' barraDeFerramentas={(
            <FerramentasDaListagem
                mostrarInputBusca
                textoBotaoNovo='Nova'
            />
        )}>     
        </LayoutBaseDePagina>
    );
};