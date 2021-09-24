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
                <a href="https://www.facebook.com/AllissonNeo/">
                <img className='socialMediaIcon' src={facebook} alt="facebook"  />
                </a>
                <a href="https://www.instagram.com/allissonneo/">
                <img className='socialMediaIcon' src={instagram} alt="instagram" />
                </a>
                <a href="https://www.linkedin.com/in/allisson-neo/">
                <img className='socialMediaIcon' src={linkedin} alt="linkedin" />
                </a>
            </div>
            </div>
            <FooterPtDois/>
        </Container>
    )
}