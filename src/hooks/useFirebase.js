import { useEffect, useState } from "react"
import firebaseAuthentication from "../firebase/firebase.init"

firebaseAuthentication()
const useFirebase = () => {
    const [bikes, setBikes] = useState([])

    useEffect(() => [
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    ], [])


    return {
        bikes,
    }
}
export default useFirebase