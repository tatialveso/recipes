import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe, deleteRecipe }) {
    return (
        <Card style={{ width: '18rem', marginBottom: '30px' }}>
            <Card.Header>
                <Link className="nav-link" to={`/receitas/${recipe.name}`}>
                    {recipe.name}
                </Link>
            </Card.Header>
            <Card.Body>
                <Card.Img src={recipe.image} />
                <div className='d-flex justify-content-around mt-3'>
                    <Card.Text>Porções: {recipe.servings}</Card.Text>
                    <Card.Text>Dificuldade: {recipe.level}</Card.Text>
                </div>
                <Button variant="danger" onClick={() => deleteRecipe(recipe.name)}>Excluir a refeição</Button>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard