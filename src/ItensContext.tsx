import axios from 'axios';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface Photos {
    title: string,
    url: string,
    thumbnailUrl: string
}

interface ItensProviderProps {
    children: ReactNode;
}


interface ItensContentData {
    photos: Photos[],
    selectedPhoto: Photos | undefined,
    setSelectedPhoto: React.Dispatch<React.SetStateAction<Photos | undefined>>
}

export const ItensContext = createContext<ItensContentData>({} as ItensContentData);

export function ItensProvider({ children }: ItensProviderProps) {
    const [photos, setPhotos] = useState<Photos[]>([])
    const [selectedPhoto, setSelectedPhoto] = useState<Photos|undefined>(undefined)

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/allissonneo/APIextends-Placeholder/Images')
            .then(response => {
                setPhotos(response.data)
                setSelectedPhoto(response.data[0])
            })
    }, [])
    return (
        <ItensContext.Provider value={{photos, selectedPhoto, setSelectedPhoto}}>
            {children}
        </ItensContext.Provider>
    )
}