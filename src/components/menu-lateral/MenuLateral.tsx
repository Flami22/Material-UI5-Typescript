import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useDrawerContext } from '../../context';

interface IChildren {
    children?: React.ReactNode;
}

interface IListItemLinkProps {
to: string;
icon: string;
label: string;
onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({to, icon, label, onClick})=> {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false});

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };
    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};

export const MenuLateral: React.FC<IChildren> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

    return (
        <>
            <Drawer 
                open={isDrawerOpen} 
                variant= { smDown ? 'temporary' : 'permanent' } 
                onClose={toggleDrawerOpen} 
            >
                <Box 
                    width={theme.spacing(28)}
                    height='100%'
                    display='flex' 
                    flexDirection='column'
                >
                    <Box 
                        width='100%'
                        height={theme.spacing(20)}
                        display='flex'
                        alignItems='center'
                        justifyContent='center' >
                        <Avatar 
                            alt="avatar"
                            src='https://avatars.githubusercontent.com/u/63281362?v=4'
                            sx={{ height: theme.spacing(12), width: theme.spacing(12)}}
                        />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List component='nav'>
                            <ListItemLink 
                                icon='home'
                                to='/'
                                label='Pagina Inicial'
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />  
                            <ListItemLink 
                                icon='star'
                                to='/tech'
                                label='Tecnologias'
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />  
                        </List>
                    </Box>
                </Box>
            </Drawer>        

            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
         
        </>
    );
};