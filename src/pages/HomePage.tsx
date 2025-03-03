import {Col, Row} from 'react-bootstrap';
import CardComponent from '../components/CardComponent.tsx';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <Row>
            {[0, 1, 2].map((index) =>
                (
                    <Col key={index}>
                        <CardComponent />
                    </Col>
                ))}
        </Row>
    );


}

export default HomePage;

