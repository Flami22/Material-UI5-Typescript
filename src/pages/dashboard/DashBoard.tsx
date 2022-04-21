import { BarraDeFerramentas } from '../../components';
import { LayoutBaseDePagina } from '../../layouts';

export const Dashboard = () => {
    return (
        <LayoutBaseDePagina titulo='Pagina inicial' barraDeFerramentas={(
            <BarraDeFerramentas
                mostrarInputBusca
                textoBotaoNovo='Nova'
            />
        )}>     
        </LayoutBaseDePagina>
    );
};