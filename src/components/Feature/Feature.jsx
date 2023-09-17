import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div>

            <div  className="flex items-center  space-x-2">
                <AiFillCheckCircle className="text-green-600"></AiFillCheckCircle>
                <h1>{feature}</h1>
            </div>

        </div>
        
    );
};

export default Feature;