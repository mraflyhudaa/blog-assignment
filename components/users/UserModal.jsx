import { useState } from 'react';
import Input from '../Input';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '@/api/users';

const INITIAL_VALUE = {
  name: '',
  gender: '',
  email: '',
  status: '',
};

export default function UserModal(props) {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState(INITIAL_VALUE);
  const [errorMessage, setErrorMessage] = useState('');

  const { setIsOpen, page, debouncedSearchValue } = props;

  const handleChange = async (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addMutation = useMutation({
    mutationFn: () => createUser(formData),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['users', page, debouncedSearchValue],
      }),
    onError: (error) =>
      setErrorMessage(
        `${error.response.data[0].field} ${error.response.data[0].message}`
      ),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    addMutation.mutate(formData, { onSuccess: () => setIsOpen(false) });
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-400 outline-none bg-opacity-60 focus:outline-none backdrop-blur-sm'>
      <div className='relative w-full h-full max-w-md md:h-auto'>
        <div className='relative bg-white rounded-lg shadow'>
          <button
            type='button'
            className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-headline rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
            onClick={() => setIsOpen(false)}
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clip-rule='evenodd'
              ></path>
            </svg>
            <span className='sr-only'>Close modal</span>
          </button>
          <div className='flex flex-col px-6 py-6 lg:px-8'>
            <h3 className='mb-4 text-xl font-medium text-headline'>
              Create new user
            </h3>
            {errorMessage ? (
              <span className='p-2 mx-auto text-base text-tertiary-hover'>
                {errorMessage}
              </span>
            ) : null}
            <form className='space-y-6' onSubmit={handleSubmit}>
              <Input
                label='Your name'
                htmlFor='name'
                type='text'
                name='name'
                id='name'
                placeholder='your name'
                onChange={handleChange}
                required
              />
              <Input
                label='Your email'
                htmlFor='email'
                type='email'
                name='email'
                id='email'
                placeholder='name@company.com'
                onChange={handleChange}
                required
              />
              <div>
                <label
                  htmlFor='gender'
                  className='block mb-2 text-sm font-medium text-headline'
                >
                  Gender
                </label>
                <select
                  id='gender'
                  name='gender'
                  className='bg-gray-50 border border-gray-300 text-headline text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  onChange={handleChange}
                  required
                >
                  <option value=''>Choose a gender</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor='status'
                  className='block mb-2 text-sm font-medium text-headline'
                >
                  Status
                </label>
                <select
                  id='status'
                  name='status'
                  className='bg-gray-50 border border-gray-300 text-headline text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  onChange={handleChange}
                  required
                >
                  <option value=''>Choose a status</option>
                  <option value='active'>Active</option>
                  <option value='inactive'>Inactive</option>
                </select>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >
                Create user
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
