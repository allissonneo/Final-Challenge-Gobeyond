import axios from 'axios';
import {createContext, ReactNode, useEffect, useState} from 'react';

interface Photos {
    title: string,
    url: string,
    thumbnailUrl: string
}

interface ItensProviderProps {
    children: ReactNode;
}

export const ItensContext = createContext<Photos[]>([]);

export function ItensProvider({children}:ItensProviderProps){
    const [photos, setPhotos] = useState<Photos[]>([])
    
    
    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/allissonneo/APIextends-Placeholder/Images')
            .then(response => {
                setPhotos(response.data)
            })
    },[])
    
    
    return(
        <ItensContext.Provider value={photos}>
            {children}
        </ItensContext.Provider>
    )
}