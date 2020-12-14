import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';


const ViewRestaurant = props => {
   
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [all, setAll] = useState([]);
    const [q, setQ] = useState("");


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

  
  function add(boards) {
    const arr = [];
    for(let board of boards) {
        arr.push({...board});
        continue;
    }
    return arr;
  } 
  useEffect( () => {
    getAll();
  }, []);

  function getAll() {
    axios.get("http://localhost:8000/api/pet")
      .then(res => {
        console.log(res);
        setAll(
            add(res.data)
          
        );
      }).catch(err => console.error(err));
  }

      const remove = _id => {
      axios.delete(`http://localhost:8000/api/pet/${_id}`)
        .then(res => {
          console.log(res);
        }).catch(err => console.error(err));
    }

  return (
      
    <div className="row my-5">
      <div className="col-sm-8 offset-sm-2">
      <div class="right">
        <Link to="/" class="right" ><u >Back to Home</u></Link>
        </div>
        <h1><span className="text-info">Pet </span>Shelter</h1>
        <h3>Details about <span className="text-info"> {name} </span> </h3>

        <div class="right">
            
              <p><button className="btn btn-outline-danger" onClick={e => remove(props._id)}>Adopt {name}</button></p> 
              
             
        </div>
        <div className="card">
          <div className="card-header bg-dark text-light">View Pet</div>
          <div className="card-body">
           
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" name="name" value={name} disabled />
              </div>
              <div className="form-group">
                <label>Type:</label>
                <input type="text" className="form-control" name="type" value={type} disabled />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea type="description" className="form-control" name="description" value={description} disabled  />
              </div>
              <div className="form-group">
                <label>Skills:</label>
                <input name="text" className="form-control" value={skill1} disabled />
                <input name="text" className="form-control" value={skill2} disabled />
                <input name="text" className="form-control" value={skill3} disabled />
              </div>
              <div className="col-sm-12" >
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewRestaurant;