import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Image({image}) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/images/${image._id}`}>
                <Card.Img src={image.filePath}/>
            </Link>
            <Card.Body>
                <Link to={`/images/${image._id}`}>
                    <Card.Title as="div">
                        <strong>{image.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        {image.taggedFace} out of {image.totalFace} faces tagged
                    </div>
                </Card.Text>

                <Card.Text as="h5">
                    <div className="my-3">
                        Tagged Faces
                    </div>
                </Card.Text>

                {image.taggedFaces.map(face => (
                    <Card.Text as="div">
                        <div className="my-1">
                            {face}
                        </div>
                    </Card.Text>
                ))}
            </Card.Body>
        </Card>
    )
}


export default Image
