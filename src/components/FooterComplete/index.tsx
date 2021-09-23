import { FooterColumnPrimary } from "../FooterCol1";
import { FooterColumnSecondary } from "../FooterCol2";
import { Container } from "./styles";


export function FooterCompleted(){
    return(
        <Container>

        <FooterColumnPrimary/>
        <FooterColumnSecondary/>
        </Container>
    )
}