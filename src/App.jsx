import { useEffect, useState } from "react"
import Particular from "./Particular"

function App() {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)

  const fetchData=async()=>{
    try
    {
      setLoading(true)
      let res= await fetch('/api/data')
      res=await res.json()
      // console.log(res)
      setData(res)
      setLoading(false)

    }catch(err){
      console.log('error in feching: ',err)
      setLoading(false)
    }    
  }
  useEffect(()=>{
    fetchData()
  },[])

  
  return (
    <>
      <h1>Vite + React</h1>
      <div>
      <h1>data: </h1>
        {
          loading ? <h2>"loading..."</h2>:         
            data.length && 
             <>
                    {
                      data?.map((val,ind)=>{
                        return (
                          <div key={ind}>
                          {val.merchantId}
                        </div>
                        )
                      })
                    }
                    
            </>
          }
      </div>
      <h1>particular data: </h1>
       <Particular/>
    </>
  )
}

export default App
