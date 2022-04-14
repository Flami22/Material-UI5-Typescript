import { BrowserRouter } from 'react-router-dom';
import { AppThemeProvider } from './context';
import { AppRoutes } from './routes';


export const App = () => {
  return (
    <AppThemeProvider>
       <BrowserRouter>
         <AppRoutes />
       </BrowserRouter>
    </AppThemeProvider>
  );
};
