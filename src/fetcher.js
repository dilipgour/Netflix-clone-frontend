import axios from "axios";

const fetcher = async (url)=>{
  
  let r= await axios.get(url)
  return r.data
}


  
const fetchWithToken = async (url, token) =>{  
  let r= await fetch(url,{
  method: 'GET',
    headers: {
      'auth-token': token
    },
  })
  
  let j= await r.json()
  return j
    

}

export {fetcher, fetchWithToken};