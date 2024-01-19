import {Button, Form} from "react-bootstrap";
import {useState} from "react";

export default function MyForm() {

    const [firstName, setFirstName] = useState('almost null')

    return (
        <>
            <h1>Form Page</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        value={firstName}
                        onChange={(evt)=>{setFirstName(evt.currentTarget.value)}}
                        type="text"
                        placeholder="Enter First Name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <output>{firstName}</output>
        </>
    )
}