import { useCallback, useEffect, useState } from "react";
import { Credentials, CredentialsResponse } from "./Types";
import ListElement from "./ListElement";
import "./ListStyle.css"


const List = () => {
  const [AllUserData, SetAllUserData] = useState<Credentials[]>([]);


  useEffect(()=>{
    fetch("http://18.185.97.66:3001/userData/", { method: "GET" })
    .then((response) => response.json())
    .then((data: CredentialsResponse) => {SetAllUserData(data.userData)})
  }, [])


  return <>
  <div className="list">

  <h1>Your Credentials brrrrrr</h1>
  <div>
  {
    AllUserData.map((item, i) => 
    <div key={i}>
        <ListElement {...item} />
      </div>
  )
}    
  </div>
</div>
</>;
};

export default List;
