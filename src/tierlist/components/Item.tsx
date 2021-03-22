import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Card, Container, Row, Col } from 'react-bootstrap';
import music from '../../sidebar/images/music.jpeg';

// TypeScript only
interface ItemProps {
  text: string
  index: number
}

// ": React.FC<ItemProps>" is TypeScript only
const Item: React.FC<ItemProps> = ({ text, index }) => {
    return (
      <Draggable draggableId={text} index={index}>
        {provided => (
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
            {
                <Card>
                    <Container>
                    <Row noGutters>
                        <Col xs="auto">
                            <a
                                target="_blank"
                                href="google.com"
                                rel="noopener noreferrer"
                            >
                                <img src={music} alt="" />
                            </a>
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>{text}</Card.Title>
                                <Card.Text>
                                <small>
                                    {text}
                                </small>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    </Container>
                </Card>
            }
            </div>
        )}
      </Draggable>
    )
}

export default Item