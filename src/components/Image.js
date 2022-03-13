import React from 'react'
import { Card } from 'react-bootstrap'

function Image({image}) {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/images/${image._id}`}>
                <Card.Img src={image.image}/>
            </a>
            <Card.Body>
                <Card.Text as="div">
                    <div className="my-3">
                        {image.name}
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


export default Image
