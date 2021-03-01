import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Home.module.css';
library.add(fas);



const NavBar = (props) => {
    return (
        <div className = {styles.headbar}>
            <Container>
                <Row>
                    <Col xs="12">
                            <img className = {styles.logo}
                                src={'/assets/img/logo.png'}
                            />
                            <div className = {styles.icone}>
                                {props.tipo == "interno" &&
                                <Link href={"/"} >  
                                    <FontAwesomeIcon icon="arrow-left" />
                                </Link>
                                }
                                {props.tipo == "principal" &&
                                <FontAwesomeIcon icon="bars" />
                                }
                                
                            </div>
                            
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )                
}

export default NavBar;