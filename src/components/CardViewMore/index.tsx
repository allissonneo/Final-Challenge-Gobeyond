import { Container } from "./styles";
import arrowRightImg from "../../assets/images/arrow-right.svg"
import { useContext} from "react";
import { ItensContext } from "../../ItensContext";
import { SelectImage } from "../SelectImage";

export function CardViewMore() {
    const {selectedPhoto} = useContext(ItensContext)

    return(
        <Container>
           {selectedPhoto && <h1 className="Title">{selectedPhoto.title}</h1>}            
            <div className='ButtonSeeMore'>
            <a className="anchorButton" href="https://www.corebiz.ag/pt/about/">
            <button>veja mais <img className = 'arrowRightImg' src={arrowRightImg} alt="Arrow Right" /> </button>
            </a>
            </div>
            <SelectImage/>
        </Container>
            )
}