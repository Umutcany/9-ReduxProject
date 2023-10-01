import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";

interface InputProps {
  type: string;
  placeHolder: string;
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data, keyword } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  const onChangeFunc = (e: any, type: any) => {
    if (type == "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  let loc = location?.search.split("=")[1];

  useEffect(() => {
    if (loc) {
      setProductInfo(data.find((dt) => dt.id == loc));
    }
  }, [loc]);

  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
    dispatch(modalFunc());
    setProductInfo("");
  };

  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: loc }));
    navigate("/");
    setProductInfo("");
    dispatch(modalFunc());
  };

  const contentModal = (
    <>
      <Input
        type="text"
        placeHolder="Ürün Ekle"
        name="name"
        id="name"
        value={productInfo?.name}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
        type="text"
        placeHolder="Fiyat Ekle"
        name="price"
        id="price"
        value={productInfo?.price}
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <Input
        type="file"
        placeHolder="Resim Ekle"
        name="url"
        id="url"
        onChange={(e) => onChangeFunc(e, "url")}
      />
      <Button
        btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
        onClick={loc ? buttonUpdateFunc : buttonFunc}
      />
    </>
  );

  const filteredItems = data.filter((dt) =>
    dt?.name.toLowerCase().includes(keyword)
  );

  return (
    <div>
      <div className="flex items-center flex-wrap">
        {filteredItems?.map((data, index) => (
          <ProductCard key={index} data={data} />
        ))}
      </div>
      {modal && (
        <Modal
          productInfo={productInfo}
          setProductInfo={setProductInfo}
          title={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
          btnText={"Oluştur"}
          btnFunc={buttonFunc}
          content={contentModal}
        />
      )}
    </div>
  );
};

export default Product;
