import React, { useState } from "react";

const LanguageSelector = () => {
  const languages = [
    { name: "Eng", icon: "/icons/us.png" },
    { name: "Kor", icon: "/icons/kr.png" },
  ];

  const [language, setLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="p-2 min-w-24 bg-zinc-800 border border-gray-600 text-white rounded-md flex justify-between items-center w-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={language.icon} alt="" className="w-5 h-5 mr-2" />
        <span>{language.name}</span>
        <span>&#x25BC;</span>
      </button>

      {isOpen && (
        <ul className="absolute min-w-24 bg-white border border-gray-300 rounded-md mt-1 z-10 w-auto">
          {languages.map((lang) => (
            <li
              key={lang.name}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleLanguageChange(lang)}
            >
              <img src={lang.icon} alt="" className="w-5 h-5 mr-2" />
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
