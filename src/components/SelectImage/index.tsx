import { useContext} from "react"
import { ItensContext } from "../../ItensContext"
import { Container, ImageContainer } from "./styles"



export function SelectImage(){
    const {photos, selectedPhoto, setSelectedPhoto} = useContext(ItensContext)    
    

    return(
        <Container>
            <ImageContainer>
                {photos.map((photo, index) => {
                    return (
                        <img
                            style={{border: selectedPhoto === photo ? '4px solid var(--white)' : ''}}
                            className="selectedPhoto"
                            key={index}
                            src={photo.thumbnailUrl}
                            alt="Imagem Placeholder"
                            onClick={()=>setSelectedPhoto(photo)}
                            />
                            )
                        })}
            </ImageContainer>
        </Container>
    )
}