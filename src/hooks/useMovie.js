import {fetchWithToken} from '../fetcher';
import useSWR from 'swr'


const useMovie = (id)=>{
 const token= localStorage.getItem('token')
  const url=`https://netflix-clone-backend-dilip-gour-s-projects.vercel.app/api/watch/${id}`
  
const {isLoading,data,mutate} =  useSWR([url, token], ([url, token]) => fetchWithToken(url, token))
  
  
  return {isLoading,data,mutate}
  
  
}


export default useMovie