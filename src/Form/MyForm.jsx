import {Button, Form} from "react-bootstrap";
import {memo, useCallback, useRef, useState} from "react";

export default function MyForm() {

    const [firstName, setFirstName] = useState('almost null')
    const lastNameRef = useRef()

    const clickHandler = useCallback((evt)=>{evt.preventDefault(); alert(lastNameRef.current.value)}, [])

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

                <MemoizedButton variant="primary" type="submit" onClick={clickHandler}>
                    Submit
                </MemoizedButton>
            </Form>

            <output>{firstName}</output>
        </>
    )
}

const MemoizedButton = memo(Button)