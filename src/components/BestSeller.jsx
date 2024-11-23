import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext"; // Đảm bảo context này có giá trị đúng
import Title from "./Title";
import ProductItem from "./ProductItem";

export const BestSeller = () => {
  const { products } = useContext(ShopContext); // Lấy dữ liệu products từ context
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    // Lọc ra các sản phẩm có thuộc tính bestseller là true
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5)); // Lấy 5 sản phẩm bestseller đầu tiên
  }, [products]); // Chạy lại khi products thay đổi

  if (bestSeller.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Hiện không có sản phẩm bestseller.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1="BEST" text2="SELLER" />
          <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
            Khám phá bộ sưu tập trái cây tươi ngon mới nhất của chúng tôi. Những
            sản phẩm mới được bổ sung sẽ làm hài lòng khẩu vị của bạn.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
