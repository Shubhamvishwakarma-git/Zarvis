import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext()

const Contextprovider = (props) =>{

    const [input, setinput] = useState("")
    const [recentprompt, setrecentprompt] = useState("")
    const [prevprompt, setprevprompt] =useState([])
    const [showres, setshowres] =useState(false)
    const [loading, setloading] =useState(false)
    const [resdata, setresdata] =useState("")

    const delaypara =(index,next) =>{
        setTimeout(function() {
            setresdata(prev=>prev+next)
        }, 75*index);
    }

    const newchat =() =>{
        setloading(false)
        setshowres(false)
    }

    const onsend = async (prompt) =>{
        setresdata("")
        setloading(true)
        setshowres(true)
        let response;
        if(prompt !== undefined){
            response = await run(prompt)
            setrecentprompt(prompt)
        }
        else{
            setprevprompt(prev=>[...prev,input])
            setrecentprompt(input)
            response = await run(input)
        }
       let responsearray = response.split("**")
       let newresponse ="" ; 
       for(let i = 0; i< responsearray.length; i++){
            if(i ==0 || i%2 !== 1){
                newresponse += responsearray[i]
            }
            else{
                newresponse += "<b>"+responsearray[i]+"</b>"
            }
       }
       let newresponse2 = newresponse.split("*").join("</br>")
       let newresponsearray = newresponse2.split(" ");
       for(let i = 0; i < newresponsearray.length; i++){
        const next = newresponsearray[i]
        delaypara(i, next+" ")
       }
       setloading(false)
       setinput("")

    }

    

    const contextvalue ={
        prevprompt,
        setprevprompt,
        onsend,
        setrecentprompt,
        recentprompt,
        showres,
        loading,
        resdata,
        input,
        setinput,
        newchat
    }
    return(
        <Context.Provider value={contextvalue}>
            {props.children}
        </Context.Provider>
    )
}

export default Contextprovider;