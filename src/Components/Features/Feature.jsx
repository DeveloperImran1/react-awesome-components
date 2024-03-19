import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";


const Feature = ({feature}) => {
    return (
        <div className='text-left flex items-center gap-5 pl-6'>
            <FaCheckCircle></FaCheckCircle>
            <p>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string 
}

export default Feature;