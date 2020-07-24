import React from 'react'

import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'

export default function EstiloTextField(props){
  const { width, height, ...rest} = props

  const useStyles = makeStyles({
    estiloTextField: {
      '&':{
        width,
      },
      '& div':{
        borderRadius: '80px',
        height
      },
      '& label': {
        transform: 'translate(25px,20px) scale(1)',
      },
      '& .MuiOutlinedInput-input': {
        padding: '18.5px 24px',
      },
      '& .MuiFormHelperText-root': {
        margin: '5px 0 0 25px',
      },
      '& .MuiSelect-select:focus': {
        backgroundColor: 'white',
      },
      '& .MuiSelect-iconOutlined': {
        width: '25px',
        height: '25px',
        righ: '20px',
        top: '15px'
      },
    },
  })

  const classes = useStyles()

  return (
    <Select 
      className={classes.estiloTextField}
      {...rest} 
    />
  )
}

EstiloTextField.defaultProps = {
  label: 'Texto default',
  variant: 'outlined',
  color: 'primary',
  width: '100%',
  height: '10px',
}

EstiloTextField.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}