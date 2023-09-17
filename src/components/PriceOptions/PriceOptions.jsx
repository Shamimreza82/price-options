import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {

    
        const priceOptions = [
          {
            "id": 1,
            "name": "Basic Monthly",
            "price": 29.99,
            "features": [
              "Unlimited access to cardio equipment",
              "Free weights and resistance machines",
              "Locker room access",
              "Towel service"
            ]
          },
          {
            "id": 2,
            "name": "Premium Monthly",
            "price": 49.99,
            "features": [
              "All Basic Monthly features",
              "Access to group fitness classes",
              "Personal trainer consultation",
              "Sauna and steam room access"
            ]
          },
          {
            "id": 3,
            "name": "Family Monthly",
            "price": 89.99,
            "features": [
              "All Premium Monthly features",
              "Up to 4 family members",
              "Childcare services",
              "Special family events"
            ]
          },
          {
            "id": 4,
            "name": "Student Monthly",
            "price": 19.99,
            "features": [
              "Valid student ID required",
              "Basic Monthly features",
              "Access to group fitness classes",
              "Locker room access"
            ]
          },
          {
            "id": 5,
            "name": "Annual Membership",
            "price": 299.99,
            "features": [
              "One-year membership commitment",
              "All Premium Monthly features",
              "Unlimited guest passes",
              "Discounts on gym merchandise"
            ]
          },
          {
            "id": 6,
            "name": "Senior Monthly",
            "price": 24.99,
            "features": [
              "For customers aged 60+",
              "Basic Monthly features",
              "Access to senior fitness classes",
              "Sauna and steam room access"
            ]
          }
        ]
      
      

    return (
        <div>
            <h2 className='text-5xl'>Best Prices in the town</h2>
            {
                priceOptions.map(option =>
                     <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;