import { Container, Content } from './styles';
import logoBrancaImg from '../../assets/images/logo-branca.svg'
import { useState } from 'react';

export function Header() {
    const [burger, setBurger] = useState(false);
   
        document.body.style.overflow = burger?'hidden':'initial';
    return (
        <Container>
            <Content>
            <a className='anchorHome' href='/'>
            <img className='logoBranca' src={logoBrancaImg} alt="Logo Corebiz"/>
            </a>
                <div className={burger?'menuSection on': 'menuSction' }>

                <div onClick={() => setBurger(!burger)} className='menuToggle'>
                    <div className='one'></div>
                    <div className='two'></div>
                    <div className='three'></div>
                </div>


                <nav>
                    <a className='anchorHeader' href='https://www.corebiz.ag/pt/about/'>a corebiz</a>
                    <a className='anchorHeader' href='https://www.corebiz.ag/pt/about/'>serviços</a>
                    <a className='anchorHeader' href='https://www.corebiz.ag/pt/cases/'>cases</a>
                    <a className='anchorHeader' href='https://www.corebiz.ag/pt/contato/'>contato</a>
                </nav>
                </div>
            </Content>
        </Container>
    )
}