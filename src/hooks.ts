import {useState, useEffect, useContext} from 'react';
import { TokenContext } from './context';
import axios from 'axios';



const useFetch = () => {
    const [token] = useContext<string>(TokenContext);
    const [query, setQuery] = useState<any[]>([]);
    const [error, setError] = useState<string>('');


    useEffect(()=>{
        const fetch = async () => {
            try{
                const request = await axios.get('http://localhost:8080/v1/boards/get',{
                    method:'GET',
                    headers: {
                        'Content-type':'application/json',
                        Authorization: `Bearer ${token}`,
                    }
                });
                setQuery(request.data);
            }catch(err){
                setError(err)
            }
        }
        fetch();
    },[])

    return {query, error}
}

export {useFetch};