import React from 'react';

interface InputFieldProps {
  value: string;
  onChange: (newValue: string) => void;
}

const Input: React.FC<InputFieldProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
      placeholder="Enter text here"
    />
  );
};

export default Input;
