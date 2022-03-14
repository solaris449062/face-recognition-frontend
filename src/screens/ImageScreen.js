import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Image, Button, Card, ListGroup, Row, Col } from 'react-bootstrap'
import imageInfo from '../imageInfo'
import { propTypes } from 'google-map-react'


function ImageScreen() {
    let params = useParams();
    const image = imageInfo.find((image) => image._id === params.id)
    return(
        <div>
            <Link to='/' className='btn btn-light my-3'>Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={image.filePath} alt={image.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{image.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Identified faces: {image.totalFace} 
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Tagged faces: {image.taggedFace}
                        </ListGroup.Item>

                        {image.taggedFaces.map(face => (
                            <ListGroup.Item>
                                {face}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default ImageScreen