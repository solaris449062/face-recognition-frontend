import {React, useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios' 
import Image from '../components/Image'
import Loader from '../components/Loader'
import Message from '../components/Message'

import { useDispatch, useSelector } from 'react-redux'
import {listPhotos} from '../actions/photoActions'

function HomeScreen() {
    const dispatch = useDispatch()
    const photoList = useSelector(state => state.photoList)
    const { error, loading, photos} = photoList

    useEffect(() => {
        dispatch(listPhotos())
    }, [dispatch])
    
    return (
        <div>
            <h1>All Photos</h1>
            {loading ?  <Loader/> 
                : error ? <Message>{error}</Message>
                    :
                    <Row>
                        {photos.map(photo => (
                            <Col key={photo._id} sm={12} md={6} lg={4} xl={3}> 
                                <Image image={photo}/> 
                            </Col>
                        ))}
                    </Row>
            }
            
        </div>
    )
}

export default HomeScreen