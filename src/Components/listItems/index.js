import Popup from 'reactjs-popup'
import {useState,useEffect} from "react"

const listItems = (props) => {
    const {onDetails}=props
    const [name,setName]=useState("")
    useEffect(()=>{
        const a=async()=>{
            const b=`https://api.chucknorris.io/jokes/random?category=${onDetails}`
            const c=await fetch(b)
            const d=await c.json()
            setName(d.value)
        }
    })
    const onButton=async()=>{
        const b=`https://api.chucknorris.io/jokes/random?category=${onDetails}`
        const c=await fetch(b)
        const d=await c.json()
        setName(d.value)
    }
    return(
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            {onDetails}
          </button>
        }
      >
        {close => (
          <>
            <div>
              <h1>{onDetails}</h1>
              <p>{name}</p>
              <button type="button" onClick={onButton}>Next</button>
            </div>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              Close
            </button>
          </>
        )}
      </Popup>
    </div>
    )
}
   export default listItems