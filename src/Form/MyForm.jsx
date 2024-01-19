import {Button, Form} from "react-bootstrap";
import {useRef, useState} from "react";

export default function MyForm() {

    const [firstName, setFirstName] = useState('almost null')
    const lastNameRef = useRef()

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

                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" ref={lastNameRef}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={(evt)=>{evt.preventDefault(); alert(lastNameRef.current.value)}}>
                    Submit
                </Button>
            </Form>

            <output>{firstName}</output>
        </>
    )
}