import { Container } from "./styles";

export function FooterColumnSecondary(){
    return(
        <Container>
            <div className="Card">
                <strong>
                .Brasil
                </strong>
                <p>
                Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP <br/>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP
                </p>
            </div>
            <div className="Card">
                <strong>
                .Argentina
                </strong>
                <p>
                Soler 5518, 3 Piso C1425BYF<br/> Palermo Hollywood CABA                   
                </p>
            </div>
            <div className="Card">
                <strong>
                .Mexico

                </strong>
                <p>
                Blvd. Miguel de Cervantes Saavedra 169,<br/> Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX
                </p>
            </div>
            <div className="Card">
                <strong>
                .Chile
                </strong>
                <p>
                Roberto del Río 1137,<br/> Providencia.
                </p>
            </div>
        </Container>
    )
}