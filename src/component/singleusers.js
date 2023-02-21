import { useEffect,useState } from "react"


const SingleUsers =({userid})=>{
    const [selected, setSelected]= useState({})
    const fetchingSingleUser = async ()=>{
        const res = await fetch(`https://dummyjson.com/users/${userid}`)
        const res1 = await res.json()
        setSelected(res1)
    }

    useEffect(()=>{
        if(userid){
       fetchingSingleUser()
       }
      
      },[userid])

    return(<>
       {Object.keys(selected).length > 0 && <div className="employeeDetails">
    <img className="empImage" src={selected.image} alt="" />
    <div className="name">Name:- {selected.firstName} {selected.lastName}</div>
    <div className="name">Email:- {selected.email} </div>
    <div className="name">Gender:- {selected.gender} </div>
    <div className="name">Age:- {selected.age}</div>
    <div className="name">Phone No:- {selected.phone}</div>
    <div className="name">Address:-{selected.address.address}</div>
   
       </div>}
    </>)
}

export default SingleUsers