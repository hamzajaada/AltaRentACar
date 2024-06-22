import React from 'react';
import { useTranslation } from 'react-i18next';

const Thanks = ({ onCancel, message }) => {
  const { t } = useTranslation();


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <span className="mb-4 text-[15px]  italic ">{t("thanks")}</span>
<div className="flex justify-center  mt-2 mb-2 w-full">
        <button
            className="px-2 py-1 h-[30px] text-white uppercase tracking-[2px] text-sm bg-customRed hover:bg-red-900 rounded-md"
            onClick={onCancel}
          >
            OK  
          </button>

        </div>
      </div>
    </div>
  );
};

export default Thanks;
