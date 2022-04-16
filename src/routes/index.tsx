import { Button } from '@mui/material';
import { Routes , Route} from 'react-router-dom';
import { useAppThemeContext } from '../context';

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext();
    return (
        <Routes>
            <Route path="/" element={<Button variant='contained' color='primary' onClick={ toggleTheme }>Teste</Button>}/>
        </Routes>
    );
};