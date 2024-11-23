import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem"; // Nhớ import ProductItem

const LatestStore = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1="LATEST" text2="FRUITS" />
          <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
            Khám phá bộ sưu tập trái cây tươi ngon mới nhất của chúng tôi. Những
            sản phẩm mới được bổ sung sẽ làm hài lòng khẩu vị của bạn.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            image={item.image} // Truyền image là mảng hoặc chuỗi đều được
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestStore;
