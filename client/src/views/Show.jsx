import {useState, useEffect} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';


const Show = props => {
    const [pet, setPet] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res => setPet(res.data.results[0]))
        .catch(err => console.log(err))
    }, [props])

    const handleAdoptPet = (id) => {
        Axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return(

        <div className="card col-7 text-left mx-auto">
            <div className="mt-3 d-flex justify-content-between">
                <h4>Details about: {pet.name}</h4>
                <button 
                    className="btn btn-danger"
                    onClick={() => {handleAdoptPet(props.id)}}
                    >Adopt {pet.name}
                </button>
            </div>
            <div className="card-body">
                <p className="card-text">Type: {pet.petType}</p>
                <p className="card-text">Description: {pet.description}</p>
                {
                    pet.skill_1 !== "" ?
                        <p className="card-text">Skill 1: {pet.skill_1}</p> :
                        ""
                }
                {
                    pet.skill_2 !== "" ?
                        <p className="card-text">Skill 2: {pet.skill_2}</p> :
                        ""
                }
                {
                    pet.skill_3 !== "" ?
                        <p className="card-text">Type: {pet.skill_3}</p> :
                        ""
                }

            </div>
        </div>
    )
}

export default Show;