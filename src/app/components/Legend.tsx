import React from 'react';

const Legend: React.FC = () => {
  return (
    <div className="text-center mt-4">
      <div className="inline-block align-middle mr-2 w-3 h-3 rounded-full" style={{ backgroundColor: 'rgb(74, 222, 128)' }}></div>
      <span className="align-middle text-sm text-black">Even Streak</span>
      <div className="inline-block align-middle ml-4 mr-2 w-3 h-3 rounded-full" style={{ backgroundColor: 'rgb(234, 179, 8)' }}></div>
      <span className="align-middle text-sm text-black">Odd Streak</span>
    </div>
  );
};

export default Legend;
