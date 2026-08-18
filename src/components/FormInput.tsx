import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { ContractData } from '../types';

interface Props {
  label?: string;
  name: keyof ContractData;
  register: UseFormRegister<ContractData>;
  errors: FieldErrors<ContractData>;
  type?: string;
  placeholder?: string;
  className?: string;
  options?: { value: string; label: string }[];
}

export const FormInput: React.FC<Props> = ({
  label,
  name,
  register,
  errors,
  type = 'text',
  placeholder,
  className = '',
  options,
}) => {
  const baseClasses = `w-full bg-[#1a1a1a] border rounded px-3 py-2 text-sm focus:border-amber-500 focus:outline-none transition-colors text-slate-300 placeholder-slate-600 ${
    errors[name] ? 'border-red-500/50' : 'border-white/10'
  }`;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
      )}
      
      {type === 'textarea' ? (
        <textarea
          id={name}
          placeholder={placeholder || label}
          className={`${baseClasses} resize-none`}
          rows={3}
          {...register(name)}
        />
      ) : type === 'select' ? (
        <select id={name} className={baseClasses} {...register(name)}>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder || label}
          className={baseClasses}
          {...register(name)}
        />
      )}
      
      {errors[name] && (
        <span className="text-red-500/80 text-[10px] mt-0.5">{(errors[name]?.message as string) || 'Campo obrigatório'}</span>
      )}
    </div>
  );
};
