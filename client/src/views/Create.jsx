import PetForm from '../components/PetForm';
import { navigate } from '@reach/router';
import {useState} from 'react';
import Axios from 'axios';


const Create = props => {
    const [pet, setPet] = useState({
        name:"",
        petType:"",
        description:"",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    const [errors, setErrors] = useState({
        name:"",
        petType:"",
        description:""
    })

    const handleChange = e => {
        setPet({
            ...pet,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        Axios.post("http://localhost:8000/api/pets", pet)
        .then(res => navigate('/'))
        .catch(err => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors)
        })
    }


    return(
        <>
            <PetForm 
                inputs = {pet}
                title = "Add Pet"
                submitValue = "Create"
                handleInputChange = {handleChange}
                handleSubmit = {handleSubmit}
                errors = {errors}
            />
        </>
    )
}

export default Create;