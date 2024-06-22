import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import ukFlag from '../assets/img/Accesoires/ukFlagpng.png'; // adjust the path as necessary
import esFlag from '../assets/img/Accesoires/esFlag.png'; // adjust the path as necessary

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Menu as="div" className=" inline-block text-left">
      <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
        <span className="sr-only">Open language menu</span>
        <img src={ukFlag} alt="Language" className="h-5 w-5"/>
      </Menu.Button>
      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => changeLanguage('en')}
                className={`${
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                } group flex items-center px-4 py-2 text-sm`}
              >
                <img src={ukFlag} alt="English" className="mr-2 h-5 w-5"/>
                English
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => changeLanguage('es')}
                className={`${
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                } group flex items-center px-4 py-2 text-sm`}
              >
                <img src={esFlag} alt="Spanish" className="mr-2 h-5 w-5"/>
                Español
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default LanguageSwitcher;
