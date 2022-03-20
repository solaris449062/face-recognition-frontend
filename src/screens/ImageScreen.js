import { React, useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Image, Button, Card, ListGroup, Row, Col } from 'react-bootstrap'
import axios from 'axios'


function ImageScreen() {

    const [image, setImage] = useState([])
    let params = useParams();
    
    useEffect(() => {
        async function fetchImage() {
            const response = await axios.get(`/api/images/${params.id}`)
            setImage(response.data)
        }
        fetchImage()
    }, [])

    return(
        <div>
            <Link to='/' className='btn btn-light my-3'>Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={image.image} alt={image.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{image.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Identified faces: {image.total_faces} 
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Tagged faces: {image.tagged_faces}
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default ImageScreen