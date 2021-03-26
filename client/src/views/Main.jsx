import { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import Axios from 'axios';

const Main = props => {
    const [pets, setPets] = useState(null);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data.results))
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <div className="col-8 mx-auto d-flex justify-content-around">
                <h5 className="">These Pets are looking for a good home!</h5>
                <Link to="/new">Add Pet</Link>
            </div>
            <div className="col-6 mx-auto">
                {
                    pets ?
                        <table className="border table table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    pets.map((p,i) => {
                                        return <tr key={i}>
                                                <td className="border-right">{p.name}</td>
                                                <td className="border-right">{p.petType}</td>
                                                <td>
                                                    <Link className="mr-2 btn btn-warning" to={`/edit/${p._id}`}>Edit</Link>
                                                    <Link to={`/show/${p._id}`}>Details</Link>
                                                    {/* <button 
                                                        className="btn btn-danger"
                                                        onClick={() => {handleDestroyTemplate(p._id)}}
                                                    >Delete</button> */}
                                                </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table> :
                        <h2>Loading...</h2>
                }

            </div>
        </div>

    )
}

export default Main;