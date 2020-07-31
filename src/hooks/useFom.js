
import { useState } from 'react';
export default function useForm(valoresIniciais) {

  const [values, setValues] = useState(valoresIniciais);

  function handleValues(key, value) {
    setValues({ ...values, [key]: value });
  }

  function handleEvent(event) {
    const { name, value } = event.target;
    handleValues(
      name,
      value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais)
  }

  return {
    values, handleEvent, clearForm
  }
}
