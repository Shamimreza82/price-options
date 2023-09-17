import Feature from "../Feature/Feature";

 
const PriceOption = ({option}) => {
    const {name, price, features} = option; 
    return (
        <div className="bg-blue-500 rounded-md p-4 text-white text-center flex flex-col">
            <h2>
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-3xl">/month</span>
            </h2>
            <h4 className="text-3xl mb-3">{name}</h4>
            <div className="flex-grow">
            {
                features.map((feature, idx) => <Feature key={idx}  feature={feature}></Feature>)
            }
            </div>
           <button className="btn w-full mt-5">Buy Now</button>
        </div>
    );
};

export default PriceOption;