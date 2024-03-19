import PropTypes from 'prop-types';
import Feature from '../Features/Feature';

const PriceOption = ({option}) => {
    const {name, id , price, features} = option;
    console.log(option)

    return (
        <div className='bg-blue-500 text-white p-4 rounded-lg text-center space-y-4 flex flex-col '>
            <h2>
                <span className='text-7xl'>{price.split('/')[0]}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
           <div className='flex-grow'>
           {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
           </div>

            <button className='bg-green-600 w-full p-3 rounded-lg '>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;