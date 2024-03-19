
import LineChart from "../LineChart/LineChart";
import Example from "../PieChart/PieChart";

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const pricesOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym facilities",
                "Basic workout equipment",
                "Locker room access",
                "Limited group classes"
            ],
            "price": "$30/month"
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "features": [
                "Access to gym facilities",
                "Full range of workout equipment",
                "Locker room access",
                "Unlimited group classes"
            ],
            "price": "$50/month"
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "features": [
                "Access to gym facilities",
                "Full range of workout equipment",
                "Locker room access with amenities",
                "Unlimited group classes",
                "Personal training sessions (2x/week)"
            ],
            "price": "$100/month"
        }
    ]


    return (
        <div className="m-12">
            <h2>Best Prices in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    pricesOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
            <div>
                <LineChart></LineChart>
                
            </div>
            <div>
            <Example></Example>
            </div>
        </div>
    );
};

export default PriceOptions;