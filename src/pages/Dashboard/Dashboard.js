import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

const Dashboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='text-center mt-5 mb-5'>
            <>
                <Button variant="primary" onClick={handleShow}>
                    Open Dashboard
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>DASHBOARD</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        </div>
    );
};

export default Dashboard;