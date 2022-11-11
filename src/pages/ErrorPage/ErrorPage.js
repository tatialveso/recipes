import { Alert, Container } from "react-bootstrap"


function ErrorPage() {
    return (
        <Container>
            <Alert className="my-5" variant="danger">
                <Alert.Heading>Ops! Você tentou entrar em um lugar que não existe 😞</Alert.Heading>
                <p>
                    Volte para o menu e navegue pelas rotas autorizadas. Qualquer coisa, tente novamente mais tarde.
                </p>
            </Alert>
        </Container>
    )
}

export default ErrorPage