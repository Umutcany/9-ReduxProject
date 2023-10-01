import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFunc = () => {
    dispatch(modalFunc());
    // dispatch(updateDataFunc(data));
    setOpenEdit(!openEdit);
    navigate(`/?update=${data?.id}`);
  };

  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img
        className="w-full h-full absolute rounded-md"
        src={data?.url}
        alt="bilgi"
      />
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2">
        <div className="text-lg font-semibold">{data?.name}</div>
        <div>{data?.price}$</div>
      </div>
      <div className="absolute top-0 right-0">
        <BsThreeDots
          className="cursor-pointer"
          onClick={() => setOpenEdit(!openEdit)}
          color="black"
          size={24}
        />
      </div>
      {openEdit && (
        <div className="bg-black border border-white text-white absolute top-5 right-2 p-2 text-sm  ">
          <div
            onClick={() => dispatch(deleteDataFunc(data?.id))}
            className="cursor-pointer"
          >
            Sil
          </div>
          <div onClick={updateFunc} className="cursor-pointer">
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
