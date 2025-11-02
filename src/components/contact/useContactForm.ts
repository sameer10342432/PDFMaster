
import { useReducer } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormState {
  formData: FormData;
  isSubmitting: boolean;
  isSubmitted: boolean;
}

type Action = 
  | { type: 'INPUT_CHANGE', payload: { name: string; value: string } }
  | { type: 'SUBMIT' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'RESET' };

const initialState: ContactFormState = {
  formData: {
    name: '',
    email: '',
    subject: '',
    message: ''
  },
  isSubmitting: false,
  isSubmitted: false,
};

const formReducer = (state: ContactFormState, action: Action): ContactFormState => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    case 'SUBMIT':
      return { ...state, isSubmitting: true };
    case 'SUBMIT_SUCCESS':
      return { ...initialState, isSubmitted: true };
    case 'RESET':
      return { ...initialState };
    default:
      return state;
  }
};

export const useContactForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    dispatch({ type: 'INPUT_CHANGE', payload: { name: e.target.name, value: e.target.value } });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT' });
    
    // Simulate form submission
    setTimeout(() => {
      dispatch({ type: 'SUBMIT_SUCCESS' });
    }, 2000);
  };

  const resetForm = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    ...state,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};