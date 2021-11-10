import { useEffect, useState } from "react"
import firebaseAuthentication from "../firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
firebaseAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [bikes, setBikes] = useState([])

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();



    useEffect(() => [
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    ], [])



    const signInWithGoogle = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user)

            }).catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage);
                console.log(errorMessage)

            })
            .finally(() => setLoading(false));
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                const errorMessage = error.message;
                // An error happened.
                setError(errorMessage)
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        bikes,
        user,
        error,
        loading,
        signInWithGoogle,
        logOut,

    }
}
export default useFirebase