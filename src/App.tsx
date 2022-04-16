import { BrowserRouter } from 'react-router-dom';
import { MenuLateral } from './components';
import { AppThemeProvider } from './context';
import { AppRoutes } from './routes';

export const App = () => {
    return (
        <AppThemeProvider>
            <BrowserRouter>
                <MenuLateral>
                    <AppRoutes />
                </MenuLateral> 
            </BrowserRouter>
        </AppThemeProvider>
    );
};
