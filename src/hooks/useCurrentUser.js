import {fetcher,fetchWithToken} from '../fetcher';
import useSWR from 'swr'


const useCurrentUser= ()=>{
 const token= localStorage.getItem('token')
  const url='http://localhost:5000/api/getuser'
  
const {isLoading,data,mutate} =  useSWR([url, token], ([url, token]) => fetchWithToken(url, token))
  
  
  return {isLoading,data,mutate}
  
  
}


export default useCurrentUser