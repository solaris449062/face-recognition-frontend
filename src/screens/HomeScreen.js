import {React, useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
// import imageInfo from '../imageInfo'
import axios from 'axios' 
import Image from '../components/Image'

function HomeScreen() {

    const [images, setImages] = useState([])

    useEffect(() => {
        async function fetchImages() {
            const response = await axios.get('/api/images')
            setImages(response.data)
        }
        fetchImages()
    }, [])
    
    return (
        <div>
            <h1>All Photos</h1>
            <Row>
                {images.map(image => (
                    <Col key={image._id} sm={12} md={6} lg={4} xl={3}> 
                        <Image image={image}/> 
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen