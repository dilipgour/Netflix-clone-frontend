import useSWR from 'swr'
import {fetcher} from '../fetcher';


const useBillboard= ()=>{
 const url='http://localhost:5000/api/getmovies'
  
const { data, error, isLoading } = useSWR(url, fetcher,
 { 
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
   })
 
  
  return {isLoading,data}
  
  
}


export default useBillboard