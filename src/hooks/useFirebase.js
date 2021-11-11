import { useEffect, useState } from "react"
import firebaseAuthentication from "../firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


firebaseAuthentication()


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [products, setProducts] = useState([])



    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();



    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setProducts(data))
        // .then(data => console.log(data))

    }, [])




    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
            .catch((error) => {

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

    const registerWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)

            });
    }

    // Sign with with email and password

    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user)

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    return {
        user,
        products,
        error,
        loading,
        registerWithEmail,
        signInWithEmail,
        signInWithGoogle,
        logOut,

    }
}
export default useFirebase