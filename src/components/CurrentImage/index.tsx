import { useContext} from "react";
import { ItensContext } from "../../ItensContext";
import { Container } from "./styles";


export function CurrentImage() {
    const {selectedPhoto} = useContext(ItensContext)
    return (
        <Container>
            {selectedPhoto && <img className="imgCurrent" src={selectedPhoto.url} alt="Current placeholder" />}
        </Container>
    )
}