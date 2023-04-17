import { Credentials } from "./Types";


interface ListElementProps extends Credentials {};

const ListElement = ({username, password, timestamp}: ListElementProps)=>{
  return (
    <div className="list-element">
      <p>username: {username}</p>
      <p>password: {password}</p>
      <p>{timestamp}</p>
    </div>
  )
}

export default ListElement;