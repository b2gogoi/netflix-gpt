import { useState, useRef } from "react"
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [error, setError] = useState();

    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }


    const handleButtonClick = () => {
        console.log(email.current.value);

        const message = checkValidateData(email.current.value, password.current.value);
        setError(message);
        if (message) return;

        if (isSignInForm) {
            // auth
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(`${errorCode} : ${errorMessage}`);
  });
        } else {    
            // user creation
            console.log('signing up')
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(`${errorCode} : ${errorMessage}`);
                // ..
            });
        }
        
    }

    return (
        <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/4371a395-0e42-46ae-be36-5755eebc638b/web/IN-en-20260209-TRIFECTA-perspective_3a6d8659-ddfe-4547-9584-dce64c02c230_large.jpg')]
        h-screen">
            <Header />
            <div className="flex justify-center align-middle">
               
                <form className="bg-black w-1/5 flex flex-col gap-6 p-10 rounded-md bg-opacity-85"
                    onSubmit={(e) => { e.preventDefault()}}>
                    <h1 className="font-bold text-3xl text-white">{ isSignInForm ? 'Sign In': 'Sign Up'}</h1>
                    { !isSignInForm && <input type="text" placeholder="Full name" className="h-12 p-2 rounded-sm bg-slate-800 border border-gray-500 text-slate-400"/>}
                    <input ref={email} type="text" placeholder="Email Address" className="h-12 p-2 rounded-sm bg-slate-800 border border-gray-500  text-slate-400"/>
                    <input ref={password} type="password" placeholder="Password"  className="h-12 p-2 rounded-sm bg-slate-800 border border-gray-500"/>
                    {error && <p className="italic text-red-900">{error}</p>}
                    <button className="text-white font-semibold text-xl bg-red-600 h-12 rounded-sm"
                        onClick={handleButtonClick}>
                        { isSignInForm ? 'Sign In': 'Sign Up' }
                    </button>
                    <p className="text-white cursor-pointer" onClick={() => toggleSignInForm()}>
                        { isSignInForm 
                            ? 'New to Netflix? Sign Up now!'
                            : 'Already registered? Sign In now!'
                        }
                    </p>
                </form>

            </div>
        </div>
    )
}

export default Login