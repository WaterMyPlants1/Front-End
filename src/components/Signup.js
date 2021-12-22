import React, { useState } from "react"
import reactDom from "react-dom"
import {Form, Input, FormGroup, Label, Button} from 'reactstrap'

function Signup () {

    function signUpUser() {
        
    }

    return (
        <div className="container">
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
                <Label for="email">Email</Label>
                <Input type="email" name="email" placeholder="Enter email"/>
            </FormGroup>
            <FormGroup>
                <Label for="firstname">First name</Label>
                <Input type="text" name="firstname" placeholder="Enter first name"/>
            </FormGroup>
            <FormGroup>
                <Label for="lastname">Last name</Label>
                <Input type="text" name="lastname" placeholder="Enter last name"/>
            </FormGroup>
            <FormGroup>
                <Button>Sign up</Button>
            </FormGroup>
        </Form>
        </div>
    )
}