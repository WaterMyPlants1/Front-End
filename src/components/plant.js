import React from "react"
import { Button, Form, FormGroup, Input,Label, Image} from 'reactstrap';

function Plant({details}) {
    return (
        <Form className="form">
            <FormGroup>
                <Label for="nickname">Nickname</Label>
                <Input type="text" name="nickname" value={details.nickname} placeholder="Your plant nickname"/>
            </FormGroup>
            <FormGroup>
                <Label for="species">Species</Label>
                <Input type="text" name="species" value={details.species} placeholder="Plant's species"/>
            </FormGroup>
            <FormGroup>
                <Label for="waterschedule">Watering Schedule</Label>
                <Input type="select" name="waterschedule" value={details.waterschedule} placeholder="Your plant nickname">
                    <option value="1">1x a day</option>
                    <option value="2">2x a day</option>
                    <option value="3">3x a day</option>
                    <option value="4">4x a day</option>
                    <option value="5">5x a day</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="plantPhoto">Plant Photo</Label>
                <Image src={details.image} rounded/>
                <Input type="file" name="plantPhoto"/>
            </FormGroup>
        </Form>
    )
}

export default Plant