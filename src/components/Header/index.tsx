import { Container, Content, MenuComponent } from './styles';
import logoBrancaImg from '../../assets/images/logo-branca.svg'
export function Header() {
    return (
        <Container>
            <Content>
            <a href='/'>
            <img className='logoBranca' src={logoBrancaImg} alt="Logo Corebiz"/>
            </a>
                <MenuComponent>
                    <a href='https://www.corebiz.ag/pt/about/'>a corebiz</a>
                    <a href='https://www.corebiz.ag/pt/about/'>serviços</a>
                    <a href='https://www.corebiz.ag/pt/cases/'>cases</a>
                    <a href='https://www.corebiz.ag/pt/contato/'>contato</a>
                </MenuComponent>
            </Content>
        </Container>
    )
}