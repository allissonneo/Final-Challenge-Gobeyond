import { useContext} from "react";
import { ItensContext } from "../../ItensContext";
import { Container } from "./styles";


export function CurrentImage() {
    const photos = useContext(ItensContext)
    // const [selectedImg, setSelectedImg] = useState(photos[0])

    return (
        <Container>
            {photos[0] && <img className="imgCurrent" src={photos[0].url} alt="Current placeholder" />}
        </Container>
    )
}