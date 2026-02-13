import { useState } from "react"
import Header from "./Header"

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/4371a395-0e42-46ae-be36-5755eebc638b/web/IN-en-20260209-TRIFECTA-perspective_3a6d8659-ddfe-4547-9584-dce64c02c230_large.jpg')]
        h-screen">
            <Header />
            <div className="flex justify-center align-middle">
               
                <form className="bg-black w-1/5 flex flex-col gap-6 p-10 rounded-md bg-opacity-85">
                    <h1 className="font-bold text-3xl text-white">{ isSignInForm ? 'Sign In': 'Sign Up'}</h1>
                    { !isSignInForm && <input type="text" placeholder="Full name" className="h-12 p-2 rounded-sm bg-slate-800 border border-gray-500"/>}
                    <input type="text" placeholder="Email Address" className="h-12 p-2 rounded-sm bg-slate-800 border border-gray-500"/>
                    <input type="password" placeholder="Password"  className="h-12 p-2 rounded-sm bg-slate-800 border border-gray-500"/>
                    <button className="text-white font-semibold text-xl bg-red-600 h-12 rounded-sm">
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