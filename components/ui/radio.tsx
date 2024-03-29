import * as React from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Radio: React.FC<RadioProps> = ({ className, ...props }) => {
  return (
    <div className={className}>
      <input
        type="radio"
        className="text-accent focus:ring-accent h-4 w-4 border-gray-300"
        {...props}
      />
    </div>
  );
};

export { Radio };
