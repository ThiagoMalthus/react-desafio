import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Home.module.css'
import Card from './card'

const List = ({dados}) => {

    const categorias = [];

    dados.map(dado => {
        if (categorias.indexOf(dado.category.name) === -1) {
            categorias.push(dado.category.name);
        }
    });
    categorias.sort();

  return (
    <>
    <Container>
        <div className={styles.lista}>
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
                               <Card artigo={dado.content} key={dado.content.id}/>
                        ))}
                        </Row>
                    </Row>
                )
            )}
        </div>
    </Container>
    </>
    )
    
}




export default List