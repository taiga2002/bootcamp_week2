import React from 'react'
import { FormControl, Switch, FormLabel } from '@chakra-ui/react'
const Whatend = ({end, register}) => {
  return (
    <FormControl display='flex' alignItems='center'>
    <FormLabel htmlFor='email-alerts' mb='0'>
        I want to learn {end}
    </FormLabel>
    <Switch id='email-alerts' {...register(end, {})} />
    </FormControl>
  )
}

export default Whatend