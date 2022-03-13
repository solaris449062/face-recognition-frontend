import React from 'react'
import { Row, Col } from 'react-bootstrap'
import imageInfo from '../imageInfo'
import Image from '../components/Image'

function HomeScreen() {
    return (
        <div>
            <h1>All Photos</h1>
            <Row>
                {imageInfo.map(image => (
                    <Col key={image._id} sm={12} md={6} lg={4} xl={3}> 
                        <Image image={image}/> 
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen