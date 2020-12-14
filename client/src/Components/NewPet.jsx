import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';


const NewPet = props => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

  const add = e => {
    e.preventDefault();
    const rest = {name, type , description ,skill1 , skill2 , skill3 };
    axios.post("http://localhost:8000/api/pet", rest)
      .then(res => {
        console.log(res);
        if(res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate("/");
        }
      }).catch(err => {
        console.error(err);
      });
  }

  return (
    <div className="row my-5">
      <div className="col-sm-8 offset-sm-2">
      <div class="right">
        <Link to="/" class="right" ><u >Back to Home</u></Link>
        </div>
        <h1><span className="text-info">Pet </span>Shelter</h1>
        <h3>Know a pet needing a <span className="text-info"> home ?</span> </h3>
        <div className="card">
          <div className="card-header bg-dark text-light">Add Pet</div>
          <div className="card-body">
            <form onSubmit={add}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" name="name" value={name} onChange={e => setName(e.target.value)} />
                <p className="text-danger">{errors.name ? errors.name.message: ''}</p>
              </div>
              <div className="form-group">
                <label>Type:</label>
                <input type="text" className="form-control" name="type" value={type} onChange={e => setType(e.target.value)} />
                <p className="text-danger">{errors.type ? errors.type.message: ''}</p>
              </div>
              <div className="form-group">
                <label>Descrioption:</label>
                <textarea type="text" className="form-control" name="description" value={description} onChange={e => setDescription(e.target.value)} />
                <p className="text-danger">{errors.description ? errors.description.message: ''}</p>
              </div>
              <h5>Skills (Optional):</h5>
              <div className="form-group">
                <label>Skill 1:</label>
                <input type="text" className="form-control" name="name" value={skill1} onChange={e => setSkill1(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Skill 2:</label>
                <input type="text" className="form-control" name="name" value={skill2} onChange={e => setSkill2(e.target.value)}/>
              </div>
              <div className="form-group">
                <label>Skill 3:</label>
                <input type="text" className="form-control" name="name" value={skill3} onChange={e => setSkill3(e.target.value)} />
              </div>

              <button type="submit" className="btn btn-info btn-block">Add Pet</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPet