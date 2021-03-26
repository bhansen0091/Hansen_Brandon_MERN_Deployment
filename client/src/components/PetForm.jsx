import { navigate } from '@reach/router';

const PetForm = props => {
    const {inputs, handleInputChange, handleSubmit, title, submitValue, errors} = props;

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return(
        <form onSubmit={handleSubmit} className="col-6 border my-5 py-2 mx-auto">
            <h2 className="text-center">{title}</h2>
            <div className="form-group">
                <label htmlFor="name">Pet Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.name}
                />
                <span className="text-danger">
                    {errors.name ? errors.name.message : ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="petType">Pet Type:</label>
                <input 
                    type="text" 
                    name="petType" 
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.petType}
                />
                <span className="text-danger">
                    {errors.petType ? errors.petType.message : ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input 
                    type="text" 
                    name="description" 
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.description}
                />
                <span className="text-danger">
                    {errors.description ? errors.description.message : ""}
                </span>
            </div>

            <div className="form-group">
                <label htmlFor="skill_1">Skill 1:</label>
                <input 
                    type="text" 
                    name="skill_1" 
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.skill_1}
                />
            </div>
            <div className="form-group">
                <label htmlFor="skill_2">Skill 2:</label>
                <input 
                    type="text" 
                    name="skill_2" 
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.skill_2}
                />
            </div>
            <div className="form-group">
                <label htmlFor="skill_3">Skill 3:</label>
                <input 
                    type="text" 
                    name="skill_3" 
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.skill_3}
                />
            </div>
            

            <input type="submit" value={submitValue} className="btn btn-primary"/>
            <button className="btn btn-dark mx-2" onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default PetForm;