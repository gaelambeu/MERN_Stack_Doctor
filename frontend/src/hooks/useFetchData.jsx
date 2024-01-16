import {useEffect, useState} from 'react'

const useFetchData = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

  return (
    <div>useFetchData</div>
  )
}

export default useFetchData