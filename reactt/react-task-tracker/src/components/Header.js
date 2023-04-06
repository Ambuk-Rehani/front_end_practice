import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAddToggle,addT}) => {
  return (
    <header className = 'header'>
      <h1>{title}</h1>
      <Button color = {addT?'red':'green'} text = {addT?'Close':'Add'} onClick = {onAddToggle} />
    </header>
  )
}

Header.defaultProps = {
    'title' : 'New Title in Object',
}

Header.propTypes = {
    'title': PropTypes.string.isRequired,
}

// const headingStyle = {
//     backgroundColor : 'red', 
//     color:'white'
// }

export default Header
