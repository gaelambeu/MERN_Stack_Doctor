import {useEffect, useState} from 'react'
import { token } from '../config'

const useFetchData = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const fetchData = async () =>{
            const res = await fetch(url, {
                headers:{Authorization : `Bearer ${token}`}
            })

            const result
        }
    }, [])

  return (
    <div>useFetchData</div>
  )
}

export default useFetchData