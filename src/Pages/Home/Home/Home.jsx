import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../../Loading/Loading";
import {Link} from 'react-router-dom'


const Home = () => {
    const [isLoading, SetIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            SetIsLoading(false)
        },3000)
    },[])

    return (
        <div>
            <Helmet>
                <title>Home || Task Manager</title>
            </Helmet>
           {
            isLoading ? <Loading></Loading> : 
            <div className="w-3/5 mx-auto">
            <h1 className="font-bold text-center text-6xl robo mt-40"><span className="text-purple-600">Welcome</span> of project management</h1>
            <p className="robo text-xl max-w-2xl mx-auto text-center mt-4">Hundreds of teams & businesses use Tixio Task for their project management and collaboration everyday. You can give it a try as well!</p>
           <Link to='/login'> <button className="bg-gradient-to-r from-cyan-500 to-blue-500 ...  hover:from-pink-500 hover:to-yellow-500 ...  p-4 rounded-md text-white ml-72 mt-5">Get Started</button></Link>
        </div>
           }
        </div>
    );
};

export default Home;