import styles from '../../styles/Home.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';
import Link from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);

const Card = (props) => {
    return (
        
            <Col xs="6" sm="3">
                <Link href={"/artigo/"+props.artigo.id} >           
                    
                    <div className={styles.card}>
                        <a>
                            <div className={styles.cardImg} style={{backgroundImage: "url('"+props.artigo.urlImage+"')"}}>
                                <FontAwesomeIcon icon={["far", "heart"]} className={styles.curtida}/>
                            </div>
                            <div>{props.artigo.name}</div>
                        </a> 
                    </div> 
                </Link>
            </Col>
        
        
    )                
}

export default Card;