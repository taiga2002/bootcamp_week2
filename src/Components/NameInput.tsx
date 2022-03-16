import React from 'react'
import {Input,InputGroup,InputLeftAddon, FormErrorMessage } from "@chakra-ui/react"

const NameInput = (props:any) => {
  return (
    <div>
            <InputGroup>
            <InputLeftAddon> Name </InputLeftAddon>
            <Input
            colorScheme = "white"
            id='name'
            placeholder='name'
            {...props.register('name', {
                required: 'This is required',
                minLength: { value: 3, message: 'Minimum length should be 3' },
            })}
            />
        </InputGroup>
            <FormErrorMessage>
            {props.errors.name && props.errors.name.message}
          </FormErrorMessage>
    </div>
)
  
}

export default NameInput