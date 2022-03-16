// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setUncaughtExceptionCaptureCallback } from "process";
import { useState } from "react";

// TODO: Define necessary typescript prop types, other types.

const useForm = () => {
  // TODO: Define necessary state variables and helper functions.
  const [values, setValues] = useState({ name: "", year: "", frontend: false, backend: false })
  const handleSubmit = (onSubmit: (values: any) => unknown) => {
    return ((e: any) => { e.preventDefault(); onSubmit(values)});
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const register = (item: string, registerOptions: any = { error: "prop not recognized" }) => {
  
    //This onChange should contain logic for updating the form state => onChange(e) { Can I get e.target.value => setFormState(e.target.value)}
    if (item == "frontend" || item == "backend") {
      return {
        onChange: () => {
          const newValues: any = {...values}
          newValues[item] = !values[item]
          setValues(newValues)
          console.log(newValues);
        }
      }
    }
    return {
      onChange: (e: any) => {
        const newValues: any = {...values}
        newValues[item] = e.target.value
        setValues(newValues)
        console.log(newValues);
      }
    }
  };
  const formState = { errors: false, isSubmitting: false }

  return {
    handleSubmit,
    register,
    formState
  };
};

export default useForm;
