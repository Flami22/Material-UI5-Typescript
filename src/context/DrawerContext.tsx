
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';


interface IDrawerContextData {
isDrawerOpen: boolean;
drawerOption: IDrawerOption[];
toggleDrawerOpen: () => void;
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

    return (
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
            {children}
        </DrawerContext.Provider>
    );
};