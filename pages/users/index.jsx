import { getAllUsers } from '@/api/users';
import Spinner from '@/components/Spinner';
import UserList from '@/components/users/UserList';
import UserModal from '@/components/users/UserModal';
import { useDebounce } from '@/utils/useDebounce';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function Users() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const {
    isLoading,
    isError,
    data,
    isSuccess,
    error,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['users', page, debouncedSearchValue],
    queryFn: () => getAllUsers(page, debouncedSearchValue),
    keepPreviousData: true,
  });

  const renderResults = () => {
    if (isLoading || isFetching) {
      return (
        <div className='flex items-center justify-center w-full h-screen'>
          <Spinner />
        </div>
      );
    }

    if (isError) {
      return (
        <div className='flex items-center justify-center w-full h-screen'>
          Error {error.message}
        </div>
      );
    }

    if (isSuccess) {
      return (
        <UserList
          data={data}
          page={page}
          setPage={setPage}
          isPreviousData={isPreviousData}
        />
      );
    }

    return <></>;
  };

  return (
    <div className='z-0 flex flex-col justify-center gap-4 mt-14'>
      <h1 className='text-3xl font-semibold text-headline'>Users</h1>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <div className='flex flex-col-reverse justify-between gap-4 p-4 lg:flex-row bg-primary'>
          <div>
            <label htmlFor='table-search' className='sr-only'>
              Search
            </label>
            <div className='relative mt-1'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500 '
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
              <input
                type='text'
                className='block p-2 pl-10 text-sm border border-gray-200 rounded-lg text-headline w-80 bg-gray-50 focus:ring-primary focus:border-primary '
                placeholder='Search for items'
                onChange={({ target: { value } }) => setSearchValue(value)}
                value={searchValue}
              />
            </div>
          </div>
          <button
            type='button'
            className='px-4 py-2 text-sm leading-tight text-white transition-all bg-green-600 rounded-lg hover:bg-green-700 disabled:bg-slate-400 disabled:cursor-not-allowed'
            onClick={() => setIsOpen(!isOpen)}
          >
            Create User
          </button>
        </div>
        {isOpen ? (
          <UserModal
            setIsOpen={setIsOpen}
            page={page}
            debouncedSearchValue={debouncedSearchValue}
          />
        ) : null}
        {renderResults()}
      </div>
    </div>
  );
}
