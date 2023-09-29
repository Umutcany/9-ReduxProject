import React from "react";

interface Props {
  title: string;
  content: string;
  btnText: string;
  btnFunc: any;
}

const Modal: React.FC<Props> = ({ title, content, btnText, btnFunc }) => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center">
      <div className="w-1/3 bg-white shadow-lg rounded-md p-4 ">
        <div>{title}</div>
      </div>
    </div>
  );
};

export default Modal;
