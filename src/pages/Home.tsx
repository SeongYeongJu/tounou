import { useEffect, useState } from "react";
import axios from "axios";
import TopProduct from "../components/home/topProduct/TopProduct";
import ProductList from "../components/home/productList/ProductList";
import EmailInput from "../components/home/emailInput/EmailInput";

const initialProduct = {
    id: "",
    title: "",
    description: "",
    promotionText: "",
    price: "",
    imageURL: "",
};

const Home = () => {
    // 상품 데이터를 담는 state입니다.
    const [items, setItems] = useState<ItemType[]>([]);
    const [topProduct, setTopProduct] = useState<ItemType>(initialProduct);
    console.log("items", items);

    useEffect(() => {
        // api 서버로부터 상품 목록 fetch
        const fetchItems = async () => {
            await axios
                .get(
                    "http://ec2-43-201-105-73.ap-northeast-2.compute.amazonaws.com:3000/items"
                )
                .then((res) => {
                    // 메인 하단에 위치할 상품 데이터들을 담습니다.
                    setItems(
                        res?.data.filter(
                            (product: ItemType) => product.id !== "0"
                        )
                    );

                    // 메인 최상단에 위치할 상품 데이터를 담습니다.
                    setTopProduct(res?.data[0]);
                })
                .catch((error) => console.log(error));
        };

        fetchItems();
    }, []);

    return (
        <>
            {/* 최상단 상품입니다. */}
            <TopProduct topProduct={topProduct} />
            {/* 그 외 상품들입니다. */}
            <ProductList items={items} />
            {/* 이메일 구독 컴포넌트입니다. */}
            <EmailInput />
        </>
    );
};

export default Home;
