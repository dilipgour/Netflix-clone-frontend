import {fetcher} from '../fetcher';
import useSWR from 'swr'


const useBillboard= ()=>{
 const url='https://netflix-clone-backend-dilip-gour-s-projects.vercel.app/api/random'
  
const { data, error, isLoading } = useSWR(url, fetcher,
 { 
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
   })
 
  
  return {isLoading,data}
  
  
}


export default useBillboard