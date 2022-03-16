import React from 'react';
// import { useForm } from 'react-hook-form'
import useForm from '../Hooks/useForm';
import {
  FormControl,
  Button,
  VStack,
} from '@chakra-ui/react'
import NameInput from './NameInput';
import Whatend from './Whatend';
import Selecter from './Selecter';
export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm()

  function onSubmit(values) {
    alert(JSON.stringify(values))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <VStack w="full" h="full" spacing = {5} >

        <NameInput register= {register} errors = {errors}/>
        <Whatend end= 'frontend' register = {register}/>
        <Whatend end = 'backend' register = {register}/>


        </VStack>
        
      </FormControl>

        <Selecter register = {register}/>
      
        <FormControl display='flex' gap= {10} alignItems='center'>
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