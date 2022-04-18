import { BrowserRouter } from 'react-router-dom';
import { MenuLateral } from './components';
import { AppThemeProvider, DrawerProvider } from './context';
import { AppRoutes } from './routes';

export const App = () => {
    return (
        <AppThemeProvider>
            <DrawerProvider>
                <BrowserRouter>
                    <MenuLateral>
                        <AppRoutes />
                    </MenuLateral> 
                </BrowserRouter>
            </DrawerProvider>
        </AppThemeProvider>
    );
};
