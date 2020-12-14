import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';



const EditPet = props => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

  useEffect( () => {
    console.log(props._id);
    axios.get(`http://localhost:8000/api/pet/${props._id}`)
      .then(res => {
        console.log(res);
        setName(res.data.name);
        setType(res.data.type);
        setDescription(res.data.description);
        setSkill1(res.data.skill1);
        setSkill2(res.data.skill2);
        setSkill3(res.data.skill3);
      }).catch(err => console.error(err));
  }, [props._id]);

  const update = e => {
    e.preventDefault();
    const pets = {name, type , description ,skill1 , skill2 , skill3 };
    axios.put(`http://localhost:8000/api/pet/${props._id}`, pets)
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
        <h3>Edit <span className="text-info"> {name} </span> </h3>
        <div className="card">
          <div className="card-header bg-dark text-light">Edit name</div>
          <div className="card-body">
            <form onSubmit={update}>
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
                <label>Description:</label>
                <textarea type="description" className="form-control" name="description" value={description} onChange={e => setDescription(e.target.value)}  />
                <p className="text-danger">{errors.description ? errors.description.message: ''}</p>
              </div>
              <div className="form-group">
                <label>Skill 1:</label>
                <input name="text" className="form-control" value={skill1} onChange={e => setSkill1(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Skill 2:</label>
                <input name="text" className="form-control" value={skill2} onChange={e => setSkill2(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Skill 3:</label>
                <input name="text" className="form-control" value={skill3} onChange={e => setSkill3(e.target.value)} />
              </div>
              <input type="submit" value="Edit Pet" className="btn btn-info btn-block" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditPet;