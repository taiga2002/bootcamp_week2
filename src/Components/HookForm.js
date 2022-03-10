import React from 'react';
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  Select,
  InputGroup,
  InputLeftAddon,
  Switch,
  FormLabel
} from '@chakra-ui/react'

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <InputGroup>
            <InputLeftAddon> Name </InputLeftAddon>
            <Input
            colorScheme = "white"
            id='name'
            placeholder='name'
            {...register('name', {
                required: 'This is required',
                minLength: { value: 3, message: 'Minimum length should be 4' },
            })}
            />
        </InputGroup>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>

        <FormControl display='flex' alignItems='center'>
        <FormLabel htmlFor='email-alerts' mb='0'>
            I want to learn frontend
        </FormLabel>
        <Switch id='email-alerts' />
        </FormControl>

        <FormControl display='flex' alignItems='center'>
        <FormLabel htmlFor='email-alerts' mb='0'>
            I want to learn backend
        </FormLabel>
        <Switch id='email-alerts' />
        </FormControl>
        
        <Select id='country' placeholder='I am a...'>
            <option>Freshman</option>
            <option>Sophomore</option>
            <option>Junior</option>
            <option>Senior</option>
        </Select>
        </FormControl>
      
        <FormControl display='flex' alignItems='center'>
        <Button colorScheme='blue' isLoading={isSubmitting} type='submit'>
        Submit
        </Button>
    
        <Button colorScheme='blue' variant='outline'>
        Add a text Input
        </Button>
        </FormControl>
    </form>
    
  )
}