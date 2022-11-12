import { Button, Col, Container, Image, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"

function RecipeDetails({ recipes }) {
    const { receitaId } = useParams()
    const navigate = useNavigate()

    const foundRecipe = recipes.find((oneRecipe) => {
        return oneRecipe.name === receitaId;
    })

    return (
        <Container>
            <h1 className="my-5">{foundRecipe.name}</h1>
            <Row className="align-items-center">
                <Col>
                    <Image className="w-100 rounded" src={foundRecipe.image} />
                </Col>
                <Col className="text-start">
                    <p><b>Porções:</b> {foundRecipe.servings}</p>
                    <p><b>Dificuldade:</b> {foundRecipe.level}</p>
                    <p><b>Modo de preparo:</b> {foundRecipe.preparation}</p>
                    <Button variant="light" className="mt-5 fw-bold" onClick={() => navigate(-1)}>Voltar</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default RecipeDetails