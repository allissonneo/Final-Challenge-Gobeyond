import { Container } from "./styles";
import arrowRightImg from "../../assets/images/arrow-right.svg"
import { useContext, useState} from "react";
import { ItensContext } from "../../ItensContext";
import { SelectImage } from "../SelectImage";

export function CardViewMore() {
    const photos = useContext(ItensContext)
    // const [selectedTitle, setSelectedTitle] = useState(photos[0])
    return(
        <Container>
           {photos[0] && <h1>{photos[0].title}</h1>}
            
            <button>veja mais <img className = 'arrowRightImg' src={arrowRightImg} alt="Arrow Right" /> </button>
            <SelectImage/>
        </Container>
            )
}