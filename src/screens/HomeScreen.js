import {React, useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios' 
import Image from '../components/Image'

import { useDispatch, useSelector } from 'react-redux'
import listPhotos from '../actions/photoActions'

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
            {loading ? <h2>Loading...</h2>
                : error ? <h3>{error}</h3>
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