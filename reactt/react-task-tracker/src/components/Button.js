import Proptypes from 'prop-types'

const Button = ({color, text, onClick}) =>{
    return(
        <div>
            <button style ={{backgroundColor:color}} className = 'btn' onClick = {onClick}>{text}</button>
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