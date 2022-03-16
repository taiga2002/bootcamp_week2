import React from 'react'
import { Select } from '@chakra-ui/react'
const Selecter = (props: any) => {
  return (
    <Select id='country' placeholder='I am a...' mt = {5} mb = {5} {...props.register("year", {})}>
    <option>Freshman</option>
    <option>Sophomore</option>
    <option>Junior</option>
    <option>Senior</option>
</Select>
  )
}

export default Selecter