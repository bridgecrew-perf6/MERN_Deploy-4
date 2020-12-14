import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import '../App.css';




    function add(pets) {
        const arr = [];
        for(let pet of pets) {
            arr.push({...pet});
            continue;
        }
        return arr;
  } 
  
  const AllPets = props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [all, setAll] = useState([]);
    const [q, setQ] = useState("");

    
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

    const sorted =()=>{
        let sortedData = [...all].sort((a,b)=>a.type.localeCompare(b.type))
        setAll(sortedData)
        
        }
      

    return (
      <div >
          <div class="right">
        <Link to="/new" class="right" ><u >Add a Pet to the Shelter</u></Link>
        </div>
        <h1><span className="text-info">Pet </span>Shelter</h1>
        <h3>These pets are looking for a <span className="text-info"> good </span> home</h3>
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col"class="blue">Name</th>
      <th scope="col"class="yel">Type <span onClick={e => sorted()} class="boarder1">&#8681;</span></th>
      <th scope="col"class="green">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    {all.filter(r => r.name.toLowerCase().includes(q.toLowerCase())).map( pet => 
          <div  key={pet._id}>
              <p>{pet.name}</p>
                {/* <p>Skills: <p>{pet.skill1}{pet.skill2}{pet.skill3}</p></p> */}
                </div>)}
      <td> 
      {all.filter(r => r.name.toLowerCase().includes(q.toLowerCase())).map( pet => 
          <div  key={pet._id}>
                <p>{pet.type}</p>
                </div>)}
      </td>
      <td>
      {all.filter(r => r.name.toLowerCase().includes(q.toLowerCase())).map( pet => 
      <div  key={pet._id}>
      <Link to={`/view/${pet._id}`} className="btn btn-outline-success">details</Link>
      <Link to={`/edit/${pet._id}`} className="btn btn-outline-info">edit</Link>
      </div>)}
      </td>
    </tr>
  
  </tbody>
</table>
      </div>
      
    )
    
  }

  

export default AllPets
