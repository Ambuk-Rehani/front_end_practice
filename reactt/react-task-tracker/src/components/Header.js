import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  const onClick = () =>{
    console.log('click')
  }

  return (
    <header className = 'header'>
      <h1>{title}</h1>
      <Button color = 'green' text = 'Add' onClick = {onClick} />
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
