
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';


interface IDrawerContextData {
isDrawerOpen: boolean;
drawerOptions: IDrawerOption[];
toggleDrawerOpen: () => void;
setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

interface IChildren {
    children?: React.ReactNode;
}

interface IDrawerOption {
    icon: string;
    path: string;
    label:string;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IChildren> = ({children}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);
    
    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    },[]);

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions);
    }, []);

    return (
        <DrawerContext.Provider value={{isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions}}>
            {children}
        </DrawerContext.Provider>
    );
};