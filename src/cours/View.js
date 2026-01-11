import { useNavigate, useParams } from "react-router-dom"

export default function View(){
const {CoursName} = useParams()
console.log(CoursName);


    return(<>
    <h1>h11</h1>
    <button>hii</button>
    </>)
}