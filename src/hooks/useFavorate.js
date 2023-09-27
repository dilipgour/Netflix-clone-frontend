import {fetcher,fetchWithToken} from '../fetcher';
import useSWR from 'swr'


const useFavorate= ()=>{
 const token= localStorage.getItem('token')
  const url='http://localhost:5000/api/favorate'
  
const {isLoading,data,mutate} =  useSWR([url, token], ([url, token]) => fetchWithToken(url, token))
  
  
  return {isLoading,data,mutate}
  
  
}


export default useFavorate