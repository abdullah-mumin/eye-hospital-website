import { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const creatUserInUsingEmailAndPassword = () => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                // setEmail(email);
                // setPassword(password);
                // setName(name);
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const signInUsingEmailAndPassword = () => {
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setEmail(email);
                setPassword(password);
                // console.log(email, password);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(result => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])



    return {
        user,
        email,
        signInUsingGoogle,
        creatUserInUsingEmailAndPassword,
        signInUsingEmailAndPassword,
        logOut
    }
}

export default useFirebase;