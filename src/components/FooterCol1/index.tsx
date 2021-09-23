import { Container } from "./styles";
import logoBlack from '../../assets/images/logo-preta.svg'
import linkedin from '../../assets/images/linkedin.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import { FooterPtDois } from "../FooterCol1Pt2";

export function FooterColumnPrimary(){
    return(
        <Container>
            <div className="divPai">

            <div className="parteLogo">
            <img src={logoBlack} alt="logo" />
            <strong>direitos reservados. corebiz 2021</strong>
            </div>
            <div className='socialMedia'>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={linkedin} alt="linkedin" />
            </div>
            </div>
            <FooterPtDois/>
        </Container>
    )
}