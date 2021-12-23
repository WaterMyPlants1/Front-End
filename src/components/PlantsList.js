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
        <div className="card-deck mb-3 text-center">
            {
                plants.map(plant => {
                    return (
                        <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4>{plant.name}</h4>
                        </div>
                        
                        <div className="card-body">
                            <img src = {plant.image} alt=""></img>
        
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>{plant.waterSchedule}</li>
                                <li>Last updated on {plant.lastUpdated} by {plant.lastUpdatedBy}</li>
                            </ul>
                            <button className="btn btn-lg btn-block btn-outline-primary">Edit</button>
                        </div>
                        
                    </div>
                    )
                })
            }
            <div className="card mb-4 box-shadow">
                <div className="card-header">
                    <h4>Plant name</h4>
                </div>
                
                <div className="card-body">
                    <img src="#"></img>

                    <ul className="list-unstyled mt-3 mb-4">
                        <li>Watering Schedule</li>
                        <li>Last updated by x on y</li>
                    </ul>
                    <button className="btn btn-lg btn-block btn-outline-primary">Edit</button>
                </div>
                
            
            </div>
           
        </div>

    )
}

export default PlantsList

//minor debugging