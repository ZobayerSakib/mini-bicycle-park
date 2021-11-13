import { useEffect, useState } from "react"
import firebaseAuthentication from "../firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";


firebaseAuthentication()


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [products, setProducts] = useState([]);
    const [admin, setAdmin] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    useEffect(() => {
        fetch('https://shrouded-basin-86219.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))

    }, []);

    //Sign In with google setup

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

    useEffect(() => {
        fetch(`https://shrouded-basin-86219.herokuapp.com/customers/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    //Authentication system by email and password

    const registerWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user)
                setError('')
                emailVerify();
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
                setError('')

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const emailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }


    return {
        user,
        admin,
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