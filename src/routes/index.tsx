import { useEffect } from 'react';
import { Routes , Route} from 'react-router-dom';
import { useDrawerContext } from '../context';
import { Dashboard } from '../pages';

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/',
                label: 'Pagina inicial',
            },
            {
                icon: 'star',
                path: '/cidades',
                label: 'Cidades',
            },
        ]);
    }, []);
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    );
};