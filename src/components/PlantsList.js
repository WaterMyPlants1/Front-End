import React, { useEffect, useState } from "react";
import axios from "axios";

function PlantsList() {
    const [plants, setPlants] = useState({});

    const getPlants = () => {
        axios.get("http://")
        .then(resp => {
            setPlants(resp.data);
        }).catch(err => console.error(err));
    }

    useEffect(() => {
        getPlants();
    }, []);


    return (
        <div>
            <span>Plant name</span>
            <img src="#"></img>
            <span>Watering Schedule</span>
            <span>Last updated by x on y</span>
            <button>Edit</button>
        </div>
    )
}

export default PlantsList