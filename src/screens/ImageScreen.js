import { React, useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Image, Button, Card, ListGroup, Row, Col } from 'react-bootstrap'
import { listPhotoDetails } from '../actions/photoActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function ImageScreen() {
    const dispatch = useDispatch()
    const photoDetails = useSelector(state => state.photoDetails)
    const { loading, error, photo } = photoDetails
    let params = useParams()
    
    useEffect(() => {
            dispatch(listPhotoDetails(params.id))
        
    }, [dispatch, params])


    return(
        <div>
            <Link to='/' className='btn btn-light my-3'>Back</Link>
            { loading
                ? <Loader/>
                : error 
                    ? <Message> { error } </Message>
                    :(
                        <Row>
                            <Col md={6}>
                                <Image src={photo.image} alt={photo.name} fluid/>
                            </Col>

                            <Col md={3}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <h3>{photo.name}</h3>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        Identified faces: {photo.total_faces} 
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        Tagged faces: {photo.tagged_faces}
                                    </ListGroup.Item>

                                </ListGroup>
                            </Col>
                        </Row>
                    )
                } 

        </div>
    )
}

export default ImageScreen