import { useEffect } from "App.jsx";

  function first(){
        useEffect(async ()=>{
           let a= await fetch('https://jsonplaceholder.typicode.com/comments');
       })
       return(
          <p> {a.JSON.parse(JSON.stringify())}</p>
       )
}

export default first