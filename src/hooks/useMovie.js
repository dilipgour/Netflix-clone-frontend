import {fetchWithToken} from '../fetcher';
import useSWR from 'swr'


const useMovie = (id)=>{
 const token= localStorage.getItem('token')
  const url=`http://localhost:5000/api/watch/${id}`
  
const {isLoading,data,mutate} =  useSWR([url, token], ([url, token]) => fetchWithToken(url, token))
  
  
  return {isLoading,data,mutate}
  
  
}


export default useMovie