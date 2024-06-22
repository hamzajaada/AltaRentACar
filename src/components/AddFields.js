import React from 'react';

const AddFields = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed  bg-black opacity-50"></div>
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 md:p-5 w-full max-w-md">
        <div className="flex items-center justify-between border-b pb-3 mb-4 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create New Product</h3>
          <button 
            type="button" 
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
            onClick={onClose}
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close AddFields</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AddFields;
