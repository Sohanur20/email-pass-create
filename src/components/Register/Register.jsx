import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/firebaseConfig";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const [registerError, setRegisterError] = useState('')
    const [succes, setSuccess] = useState('')
    const [showPasswords, setShowPassword] = useState(false)



    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accept = e.target.tarms.checked;
        console.log(email, password, accept)
        setRegisterError('')
        setSuccess('')

        if (password.length < 6) {
            setRegisterError("Password should be at least 6 characters ");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should be one uppercase characters');
            return;
        } else if (!accept) {
            setRegisterError("Please accept our trans condition")

            return
        }




        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess("User created succecsfully")
                sendEmailVerification(result.user)
                .then(() =>{

                    alert('Please check your email and verify your account')
                })


            })

     

            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })

    }

    return (
        <div>
            <div className="flex h-screen items-center justify-center  p-6 md:p-0 ">
                <div className="flex h-full w-full overflow-hidden rounded-xl   md:h-[90%] md:w-[80%] lg:h-[80%] shadow-2xl shadow-gray-700">
                    {/* register design side  */}
                    <div className="relative hidden h-full items-center justify-center bg-[#f39f9f] md:flex md:w-[60%] lg:w-[40%]">
                        <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
                        <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
                        <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] transition-all"></div>
                        <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd]"></div>
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-medium text-white/80 ">Welcome Back</h2>
                            <p className="animate-pulse text-sm text-white/60">Please Enter You Information</p>
                        </div>
                    </div>
                    {/* input side  */}
                    <div className="flex w-full flex-col justify-center   py-10 lg:w-[60%]">
                        <h2 className="pb-8 text-center text-3xl font-bold text-[#8EA7E9]">Register Now</h2>





                        <form onSubmit={handleRegister} className=" px-28 items-center justify-center  space-y-5 ">


                            <input className="w-full rounded-lg border border-[#8EA7E9]  px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 " type="email" placeholder="Email" name="email" required />

                            <br />

                            <div className="relative ">


                                <input className="w-full rounded-lg border  border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 " type={showPasswords ? "text" : "password"} placeholder="Password" name="password" required

                                /><span className="absolute right-2" onClick={() => setShowPassword(!showPasswords)}

                                >
                                    <div className=" text-2xl cursor-pointer mt-3">
                                        {
                                            showPasswords ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </div>




                                </span>
                            </div>



                            <div className="form-control ">
                                <label className="cursor-pointer label">
                                    <span className="label-text text-white">Remember me</span>
                                    <input type="checkbox" name="tarms" id="tarms" className="checkbox checkbox-warning" />
                                </label>
                            </div>



                            <input className="rounded-lg bg-[#8EA7E9] px-6 py-2 font-medium text-white btn border-none w-full" type="submit" value='Submit' />
                        </form>

                        <div className="text-center">
                            {
                                registerError && <p className="text-black mt-4">{registerError} </p>
                            }
                            {
                                succes && <p className="text-green-500">{succes}</p>
                            }
                        </div>
                        {/* divider  */}
                        <div className="my-8 flex items-center px-8">
                            <hr className="flex-1" />
                            <div className="mx-4 text-gray-400">OR</div>
                            <hr className="flex-1" />
                        </div>
                        {/* sign with google */}
                        <div className="mx-auto btn-ghost flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
                            <div className="flex h-full w-[50%] items-center bg-[#8EA7E9] pl-4 text-sm text-white">Sign With</div>
                            <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#8EA7E9] group-hover:hidden"></span>
                            <span className="pr-4 text-4xl  font-bold text-[#8EA7E9] btn bg-purple-600 border-none ">G+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;