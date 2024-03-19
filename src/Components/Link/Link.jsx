import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className="mr-10 bg-green-700 mb-2 rounded-md p-1" >
            <a href={route.path}>{route.name} </a>
        </li>
    );
};
Link.propTypes = {
    route: PropTypes.object.isRequired
}
export default Link;