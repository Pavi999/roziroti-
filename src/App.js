import {useState,useEffect} from "react"
const App=()=>{
  const [list,setList]=useState([])
  useEffect(()=>{
    const ab=async()=>{
      const url="https://s3.amazonaws.com/roxiler.com/product_transaction.json"
      const response=await fetch(url)
      const data=await response.json()
      setList(data)
    }
    ab()
  })
  console.log(list)
  return(
    <div>
      <h1>BlogsList</h1>
      <h1>{list}</h1>
    </div>
  )
}

export default App