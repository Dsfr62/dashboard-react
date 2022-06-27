import React, { useState } from "react";
import Navbar from '../global/navbar';

const AddProject = () => {

    const [project, setProject] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProject(values => ({...values, [name]: value}));
    };

    const handleSubmit = (event) => {event.preventDefault(); alert(`Project created!\nProject name: ${project.projectName}\nProject Direction: ${project.projectDirection}\nCreation date: ${project.projectDate}`); };

    return (
        <div>
            <Navbar />
            <div className="bg-earthLatte w-full h-screen bg-repeat">
                <div className="p-8">
                    <form onSubmit={handleSubmit}>

                        <label className="font-semibold" htmlFor="projectName">Project name: </label>
                        <input className="ml-1 bg-earthBanana ring-2 ring-earthChoco rounded-sm hover:bg-earthChoco hover:text-earthBanana hover:font-semibold ease-linear transition-all" name="projectName" type="text" value={project.projectName || ""} onChange={handleChange}/>

                        <br/><br/>

                        <label className="font-semibold" htmlFor="projectDirection">Project direction: </label>
                        <input className="ml-1 bg-earthBanana ring-2 ring-earthChoco rounded-sm hover:bg-earthChoco hover:text-earthBanana hover:font-semibold ease-linear transition-all" name="projectDirection" type="text" value={project.projectDirection || ""} onChange={handleChange}/>

                        <br/><br/>

                        <label className="font-semibold" htmlFor="projectDate">Project date: </label>
                        <input className="ml-1 bg-earthBanana ring-2 ring-earthChoco rounded-sm hover:bg-earthChoco hover:text-earthBanana hover:font-semibold ease-linear transition-all" name="projectDate" type="date" value={project.projectDate || ""} onChange={handleChange}/>

                        <br/>

                        <input type="submit" value="Cadastrar" className="font-semibold text-white mt-2 p-2 bg-earthRose rounded-md hover:bg-earthChoco hover:text-earthBanana hover:scale-105 cursor-pointer ease-linear transition-all"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProject;