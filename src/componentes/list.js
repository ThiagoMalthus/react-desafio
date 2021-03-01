import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Home.module.css'

const List = ({dados}) => {
    console.log(dados);

    const categorias = [];

    dados.map(dado => {
        if (categorias.indexOf(dado.category.name) === -1) {
            categorias.push(dado.category.name);
        }
    });
    categorias.sort();

  return (
    <>
    <Container className={styles.lista}>
        {categorias.map(
                categoria => (
                    <Row key={categoria} className={styles.categoria}>
                        <Row >
                            <Col xs="12">
                                <h3>{categoria.toUpperCase()}</h3>
                            </Col>
                        </Row>
                        <Row>
                        {dados.map(dado=>(
                               dado.category.name == categoria &&
                               <div>{dado.content.name}</div>
                        ))}
                        </Row>
                    </Row>
                )
            )}
    </Container>
    </>
    )
    
}




export default List