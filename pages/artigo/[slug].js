import React from 'react';
import axios from 'axios';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../src/componentes/navbar'
import styles from '../../styles/Home.module.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas);
library.add(far);

const Artigo = ({dados}) => {
  const router = useRouter()
  const { slug } = router.query;
  return (
    <div>
    <Head>
        <title>{dados[slug].content.name} - Artigo de {dados[slug].category.name}</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar tipo="interno"/>
    <Container>
        <Row>
            <Col className={styles.descricaoTopo} style={{backgroundImage: "url('"+dados[slug].content.urlImage+"')"}}>
                
                
                
            </Col>
        </Row>
        <Row>
            <Col className = {styles.descricaoTitulo}>
                
                {dados[slug].content.name.toUpperCase()}
                <div className = {styles.curtidaDescricao}>
                    <FontAwesomeIcon icon={["far", "heart"]} />
                </div>
                
            </Col>
        </Row>
        <Row>
            <Col className = {styles.descricaoConteudo}>
                <h5>
                    DESCRIÇÃO
                </h5>
                <p>
                    {dados[slug].content.description}
                </p>
                <h5>
                    AUTORES
                </h5>
                {dados[slug].content.authors.map(
                autor => (
                    <div key={autor.name}>{autor.name}</div>
                ))}
            </Col>
        </Row>            
    </Container>
    </div>
    )
    
}

Artigo.getInitialProps = async () =>{
    const response = await axios.get(
        'https://private-54fe53-pebmeddesafio.apiary-mock.com/contents'
    );

    return { dados:  response.data}
};


export default Artigo