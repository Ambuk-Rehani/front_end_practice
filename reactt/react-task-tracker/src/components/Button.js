import Proptypes from 'prop-types'
import {useLocation} from 'react-router-dom'


const Button = ({color, text, onClick}) =>{

    const location = useLocation();

    return(
        <div>
            {location['pathname'] === '/' && <button style ={{backgroundColor:color}} className = 'btn' onClick = {onClick}>{text}</button>}
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    color: Proptypes.string,
    text: Proptypes.string,
    onClick : Proptypes.func
}

export default Button;