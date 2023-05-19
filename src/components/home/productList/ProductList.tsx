import { styled } from "styled-components";
import BuyBotton from "../../buttons/BuyBotton";
import Product from "./Product";

const ProductList = ({ items }: { items: ItemType[] }) => {
    return (
        // 최상단 상품 바로 아래 위치해야할 상품을 먼저 걸러줍니다.
        <ProductListWrapper>
            <FirstProductContainer key={items[0]?.id}>
                <FirstProductTextBox>
                    <FirstProductDescription>
                        {items[0]?.description}
                    </FirstProductDescription>
                    <FirstProductTitle>{items[0]?.title}</FirstProductTitle>
                    <AvailableColorText>Available Colors</AvailableColorText>
                    <ColorText>Find your color</ColorText>
                    <CircleBox>
                        <WhiteCircle />
                        <PinkCircle />
                        <BlackCircle />
                    </CircleBox>
                    <PriceAndButtonBox>
                        <FirstProductPrice>{items[0]?.price}</FirstProductPrice>
                        <BuyBotton color="black" productID={items[0]?.id} />
                    </PriceAndButtonBox>
                    <FirstProductPromotion>
                        {items[0]?.promotionText}
                    </FirstProductPromotion>
                </FirstProductTextBox>
                <FirstProductImage src={items[0]?.imageURL} />
            </FirstProductContainer>
            <ProductContainer>
                {items
                    // 상단에 노출된 제품을 제외하고 나머지 제품을 표시합니다.
                    .filter((i) => i.id !== "1")
                    .map((product) => {
                        return (
                            <>
                                <Product product={product} />
                            </>
                        );
                    })}
            </ProductContainer>
        </ProductListWrapper>
    );
};

export default ProductList;

const ProductListWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FirstProductContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    @media screen and (max-width: 866px) {
        flex-direction: column-reverse;
        height: 880px;
    }
    @media screen and (max-width: 640px) {
        height: 700px;
    }
`;

const FirstProductTextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 400px;
    @media screen and (max-width: 1178px) {
        width: 400px;
    }
    @media screen and (max-width: 500px) {
        width: 300px;
        height: 300px;
    }
`;

const FirstProductTitle = styled.span`
    font-size: 3.5rem;
    font-weight: 700;
    @media screen and (max-width: 1178px) {
        font-size: 2.48rem;
    }

    @media screen and (max-width: 640px) {
        font-size: 2rem;
    }
`;
const FirstProductDescription = styled.span`
    font-size: 1.2rem;
    @media screen and (max-width: 1178px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 640px) {
        font-size: 14px;
    }
`;

const AvailableColorText = styled.span`
    font-size: 3rem;
    @media screen and (max-width: 1178px) {
        font-size: 2.1rem;
    }

    @media screen and (max-width: 640px) {
        font-size: 1.5rem;
    }
`;

const ColorText = styled.p`
    font-size: 1.1rem;
    @media screen and (max-width: 1178px) {
        font-size: 0.85rem;
    }
`;

const CircleBox = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    @media screen and (max-width: 640px) {
        margin-bottom: 0;
    }
`;

const WhiteCircle = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px dashed #eaeaea;
    background: #ffff;
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        border: 1px solid black;
    }
`;

const PinkCircle = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px dashed #eaeaea;
    background: #dd5656;
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        border: 1px solid black;
    }
`;

const BlackCircle = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px dashed #eaeaea;
    background: #000000;
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        border: 1px solid black;
    }
`;

const PriceAndButtonBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

const FirstProductPrice = styled.span`
    font-size: 3rem;
    margin-right: 2rem;
    @media screen and (max-width: 640px) {
        font-size: 2.16rem;
    }
`;

const FirstProductPromotion = styled.p`
    font-size: 1rem;
    opacity: 0.5168573;
    @media screen and (max-width: 640px) {
        display: block;
        font-size: 14px;
    }
`;

const FirstProductImage = styled.img`
    width: 48rem;
    height: 48rem;
    @media screen and (max-width: 1178px) {
        width: 30rem;
        height: 30rem;
    }
    /* @media screen and (max-width: 1042px) {
        width: 32rem;
        height: 32rem;
    } */
    @media screen and (max-width: 640px) {
        width: 28rem;
        height: 28rem;
    }
    @media screen and (max-width: 500px) {
        width: 22rem;
        height: 22rem;
    }
`;

const ProductContainer = styled.div`
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 33% 33% 33%;
    justify-items: center;
    align-items: center;
    row-gap: 1rem;
    width: 100%;

    @media screen and (max-width: 1042px) {
        grid-template-rows: 33% 33% 33%;
        grid-template-columns: 50% 50%;
    }
    @media screen and (max-width: 720px) {
        grid-template-rows: 16.5% 16.5% 16.5% 16.5% 16.5% 16.5%;
        grid-template-columns: 100%;
    }
`;
