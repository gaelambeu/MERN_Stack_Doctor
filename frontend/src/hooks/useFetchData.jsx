import {useEffect, useState} from 'react'
import { token } from '../config'

const useFetchData = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const fetchData = async () =>{

            setLoading(true)

            try {
                const res = await fetch(url, {
                    headers:{Authorization : `Bearer ${token}`}
                })
    
                const result = await res.json()
    
                if(!res.ok){
                    return toast.error(result.message)
                }

                setData(result.data)
                setLoading(false)
                
            } catch (err) {
                
            }
        }
    }, [])

  return (
    <div>useFetchData</div>
  )
}

export default useFetchData