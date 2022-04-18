import { Button } from '@mui/material';
import { Routes , Route} from 'react-router-dom';
import { useDrawerContext } from '../context';

export const AppRoutes = () => {
    const { toggleDrawerOpen } = useDrawerContext();
    return (
        <Routes>
            <Route path="/" element={<Button variant='contained' color='primary' onClick={ toggleDrawerOpen }>Menu</Button>}/>
        </Routes>
    );
};