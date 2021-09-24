import { useContext} from "react";
import { ItensContext } from "../../ItensContext";
import { Container } from "./styles";


export function CurrentImage() {
    const {selectedPhoto} = useContext(ItensContext)
    return (
        <Container>
            <div className="borderImage">
            {selectedPhoto && <img className="imgCurrent" src={selectedPhoto.url} alt="Current placeholder" />}
            </div>
        </Container>
    )
}