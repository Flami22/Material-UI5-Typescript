import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';

export const FerramentasDeDetalhe: React.FC = () => {
    const theme = useTheme();

    return (
        <Box 
            gap={1} 
            marginX={1}
            padding={1} 
            paddingX={2} 
            display="flex" 
            alignItems='center'
            height={theme.spacing(5)} 
            component={Paper}
        >
            <Button
                color='primary'
                disableElevation
                variant='outlined'
                startIcon={<Icon>save</Icon>}
            >Salvar</Button>
            
            <Button
                color='primary'
                disableElevation
                variant='contained'
                startIcon={<Icon>save</Icon>}
            >Salvar e voltar</Button>
            
            <Button
                color='primary'
                disableElevation
                variant='outlined'
                endIcon={<Icon>delete</Icon>}
            >Apagar</Button>

            <Button
                color='primary'
                disableElevation
                variant='outlined'
                endIcon={<Icon>add</Icon>}
            >Novo</Button>

            <Divider variant='middle'/>

            <Button
                color='primary'
                disableElevation
                variant='outlined'
                endIcon={<Icon>arrow_back</Icon>}
            >Voltar</Button>
        </Box>
    );
};