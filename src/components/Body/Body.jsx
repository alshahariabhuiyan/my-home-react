import React from 'react';
import { Button, Card } from 'react-bootstrap';
import pic1 from './../../assets/image_thumb.jpeg'
import pic2 from './../../assets/The-Muraka-Undersea-Bedroom-scaled.jpg'
import pic3 from './../../assets/576b567ef6979562e1aff3f5536a47bf.jpg'
import { FaBed, FaAccessibleIcon } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const navigate = useNavigate()
    const handleBook = () => {
        navigate('/book')
    }
    return (
        <div className='card-container d-flex justify-content-around'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pic1} />
                <Card.Body>
                    <Card.Title>Standerd single room</Card.Title>
                    <Card.Text>
                        Experience the ultimate luxury in the heart of nature. Our hotel offers breathtaking views, world-class amenities, and a serene atmosphere for a truly unforgettable stay.
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <FaBed /> <span>: 1</span>
                        </div>
                        <div>
                            <FaAccessibleIcon></FaAccessibleIcon> <span>: 1</span>
                        </div>
                        <div>
                            <span> $ 119</span>
                        </div>
                        <Button onClick={handleBook} variant="outline-primary">Book</Button>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pic2} />
                <Card.Body>
                    <Card.Title>Couple Power Room</Card.Title>
                    <Card.Text>
                        Escape to our beachfront paradise and unwind to the soothing sound of the waves. Indulge in beachside luxury and create memories that last a lifetime.
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <FaBed /> <span>: 1</span>
                        </div>
                        <div>
                            <FaAccessibleIcon></FaAccessibleIcon> <span>: 2</span>
                        </div>
                        <div>
                            <span> $ 149</span>
                        </div>
                        <Button onClick={handleBook} variant="outline-primary">Book</Button>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pic3} />
                <Card.Body>
                    <Card.Title>Family Capaciy Room</Card.Title>
                    <Card.Text>
                        Immerse yourself in the local culture during your stay with us. Our hotel offers guided tours, cultural workshops, and a chance to connect with the community.
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <FaBed /> <span>: 1</span>
                        </div>
                        <div>
                            <FaAccessibleIcon></FaAccessibleIcon> <span>: 1</span>
                        </div>
                        <div>
                            <span> $ 200</span>
                        </div>
                        <Button onClick={handleBook} variant="outline-primary">Book</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Body;