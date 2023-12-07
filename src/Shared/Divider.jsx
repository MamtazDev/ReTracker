import React from 'react';

const Divider = () => {
    return (
        <div className="w-full flex gap-6 items-center my-8">
        <p className="border border-b-lightGray w-full"></p>
        <p className="text-base font-semibold">OR</p>
        <p className="border border-b-lightGray w-full"></p>
      </div>
    );
};

export default Divider;