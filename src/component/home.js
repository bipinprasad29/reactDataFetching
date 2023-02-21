import { useEffect, useState } from "react";
import SingleUsers from "./singleusers";

const Home = () => {

const [data, setData]= useState([]) 
const [userid, setUserId] = useState(0)
const [delUser,setDelUser]= useState(0)


const fetchingData =async()=>{
  const res = await fetch('https://dummyjson.com/users')
  const res1 = await res.json()
  setData(()=>res1.users)
} 

const searchHandler =async (e)=>{
  if(e.target.value){
  const user = e.target.value
  const res = await fetch(`https://dummyjson.com/users/search?q=${user}`)
  const res1 = await res.json()
  setData(()=>res1.users)
  }
}



  useEffect(() => {
  let subscribe = true
   if(subscribe){
    fetchingData()
    subscribe = false
}
  },[]);

useEffect(()=>{
  if(delUser){fetch('https://dummyjson.com/users/1', {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(alert('deleted'))
}
else{
 fetchingData()       
}
},[delUser])

return(
<div className='container'>

<div className='employNamelist'>
<input className="searchbar" type="text" onChange={(e)=>searchHandler(e)} placeholder='Search Here' />
<div className="employ">
{data.length>0 && data.map((el,ind)=>{
 return (<div className='titleContainer' key={el.id}>
           <div>{ind +1}</div>
           <div className='employName' onClick={()=>setUserId(el.id)}>{el.firstName} {el.lastName}</div>
           <div className ='button' onClick={()=>setDelUser(el.id)}>Del</div></div>)})}</div>
</div>

<SingleUsers userid={userid} />  


</div>  
)  
};
export default Home;
