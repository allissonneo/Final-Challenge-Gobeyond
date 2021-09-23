import { useContext, useState } from "react"
import { ItensContext } from "../../ItensContext"
import { Container, ImageContainer } from "./styles"



export function SelectImage(){
    const photos = useContext(ItensContext)    

    const [selectedImg, setSelectedImg] = useState(photos[0])
    function handleChangePhotoClick(item: any){
        setSelectedImg(item)
        let count = item.id
        console.log(count)
    }

    return(
        <Container>
            <ImageContainer>
                {photos.map((photo, index) => {
                    return (
                        <img
                            style={{border: selectedImg === photo ? '4px solid var(--white)' : ''}}
                            className="selectedPhoto"
                            key={index}
                            src={photo.thumbnailUrl}
                            alt="Imagem Placeholder"
                            onClick={()=>handleChangePhotoClick(photo)}
                            />
                            )
                        })}
            </ImageContainer>
        </Container>
    )
}