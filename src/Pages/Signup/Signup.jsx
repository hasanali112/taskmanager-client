import { useForm } from "react-hook-form";
import { FaUserGroup, FaLock, FaUserPen } from "react-icons/fa6";
import login from "../../assets/login.png";
import { Link } from "react-router-dom";

const Signup = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
    return (
        <div>
      <div className="hero min-h-screen text-white">
        <div className="hero-content">
          <div className="card flex-shrink-0 rounded-md w-full max-w-sm shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5">
            <div className="card-body">
              <img src={login} alt="" className="w-10 ml-28" />
              <h1 className="text-2xl text-center font-bold">Sign Up</h1>
               <form onSubmit={handleSubmit(onSubmit)}>
               <div className="form-control">
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Name"
                  className="outline-none border-b bg-transparent robo mt-5 pl-6"
                />
                <FaUserPen className="-mt-5" />
              </div>
               <div className="form-control mt-5">
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="outline-none border-b bg-transparent robo mt-5 pl-6"
                />
                <FaUserGroup className="-mt-5" />
              </div>
              <div className="form-control mt-5">
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Password"
                  className="outline-none border-b bg-transparent text-white robo  pl-6 mt-4"
                />
                <FaLock className="-mt-5" />
                
              </div>
              <div className="form-control mt-8 w-1/2 mx-auto">
                <input
                  type="submit"
                  value="Sign up"
                  className="bg-white rounded-full text-black p-2 cursor-pointer"
                />
              </div>
              <p className="robo mt-5">Already have an account? Please <Link to='/login' className="text-green-500">Login</Link></p>
               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Signup;