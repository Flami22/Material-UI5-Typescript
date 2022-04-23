import { FerramentasDeDetalhe } from '../../components';
import { LayoutBaseDePagina } from '../../layouts';

export const Dashboard = () => {
    return (
        <LayoutBaseDePagina titulo='Pagina inicial' barraDeFerramentas={(
            <FerramentasDeDetalhe 
                mostrarBotaoSalvarEFechar
                mostrarBotaoNovo
            />
        )}>     
        </LayoutBaseDePagina>
    );
};