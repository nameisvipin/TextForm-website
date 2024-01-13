import React from 'react'
const Alert = (props) => {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  if (!props.alert) {
    return null; // or some default content, depending on your use case
  }
  return (<>
     <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalizeFirstLetter(props.alert.type)}: </strong>{props.alert.msg}
      
    </div>
  </>)
}
export default Alert;