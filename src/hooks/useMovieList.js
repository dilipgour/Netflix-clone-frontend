import useSWR from 'swr'
import {fetcher} from '../fetcher';


const useBillboard= ()=>{
 const url='https://netflix-clone-backend-dilip-gour-s-projects.vercel.app/api/getmovies'
  
const { data, error, isLoading } = useSWR(url, fetcher,
 { 
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
   })
 
  
  return {isLoading,data}
  
  
}


export default useBillboard