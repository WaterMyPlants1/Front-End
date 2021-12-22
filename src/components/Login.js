import React, { useState } from "react"
import reactDom from "react-dom"
import {Form, Input, FormGroup, Label, Button} from 'reactstrap'
import axios from "axios"

function Login() {
    const [user, setUser] = useState({});

    function loginUser () {
        axios.post("", user)
        .then(resp => {
            console.log(resp);
        }).catch(err => {
            console.error(err);
        });
    } 

    return (
        <Form className="form">
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username" placeholder="Enter username"/>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" placeholder="Enter password"/>
            </FormGroup>
            <FormGroup>
                <Button>Login</Button>
            </FormGroup>
        </Form>
    )
}

export default Login