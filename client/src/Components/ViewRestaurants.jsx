import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';


const ViewRestaurant = props => {
   
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [yearEstablished, setYear] = useState(2000);
  const [description, setDescription] = useState("");

  useEffect( () => {
    console.log(props._id);
    axios.get(`http://localhost:8000/restaurants/${props._id}`)
      .then(res => {
        console.log(res);
        setName(res.data.name);
        setCuisine(res.data.cuisine);
        setYear(res.data.yearEstablished);
        setDescription(res.data.description);
      }).catch(err => console.error(err));
  }, [props._id]);

  return (
    <div className="row my-5">
      <div className="col-sm-8 offset-sm-2">
        <div className="card">
          <div className="card-header bg-dark text-light">View Restaurant</div>
          <div className="card-body">
           
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" name="name" value={name} disabled />
              </div>
              <div className="form-group">
                <label>Cuisine:</label>
                <input type="text" className="form-control" name="cuisine" value={cuisine} disabled />
              </div>
              <div className="form-group">
                <label>Year Established:</label>
                <input type="number" className="form-control" name="yearEstablished" value={yearEstablished} disabled  />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea name="description" className="form-control" value={description} disabled ></textarea>
              </div>
              <div className="col-sm-12" >
              <Link to={`/edit/${props._id}`} className="btn btn-outline-info">Edit</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewRestaurant;