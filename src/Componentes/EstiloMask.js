import React from 'react'

import InputMask from 'react-input-mask'
import PropTypes from 'prop-types'

import EstiloTextField from './EstiloTextField'

export default function EstiloMask({
  error, helperText, label, mask, ...rest
}){
  return (
    <InputMask 
      mask={mask}
      maskChar=" "
      {...rest}
    >
      {
        (inputProps) => (
          <EstiloTextField
            {...inputProps}
            floating
            label={label}
            error={!!error}
            helperText={error || helperText}
            variant="outlined"
          />
        )
      }
    </InputMask>
  )
}

//436.026.098-98
EstiloMask.defaultProps = {
  error:  null,
  helperText: null,
  label: '',
  mask: '999.999.999-99'
}

EstiloMask.propTypes = {
  error: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  mask: PropTypes.string,
}