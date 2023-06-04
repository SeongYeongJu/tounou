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
                    <FirstProductTitle>
                        {items[0]?.title}
                        <sup>+</sup>
                    </FirstProductTitle>
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
                <FirstProductImage src={items[0]?.imageURL} loading="lazy" />
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
    width: 1440px;

    @media screen and (max-width: 1280px) {
        width: 1280px;
    }

    @media screen and (max-width: 1024px) {
        width: 1024px;
    }

    @media screen and (max-width: 820px) {
        margin-top: 0;
        width: 100%;
    }

    @media screen and (max-width: 525px) {
        margin-top: 30rem;
    }
`;

const FirstProductContainer = styled.div`
    position: relative;
    height: 811.5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: calc(100% - 186px);

    @media screen and (max-width: 820px) {
        flex-direction: column-reverse;
        height: 880px;
        margin-bottom: 77px;
    }

    @media screen and (max-width: 525px) {
        height: 700px;
    }
`;

const FirstProductTextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    height: 400px;

    @media screen and (max-width: 525px) {
        width: 290px;
    }
`;

const FirstProductTitle = styled.span`
    font-size: 3.125rem;
    font-weight: 700;

    @media screen and (max-width: 525px) {
        color: #2b2835;
        font-size: 2rem;
    }
`;

const FirstProductDescription = styled.span`
    font-size: 1rem;

    @media screen and (max-width: 525px) {
        font-weight: 500;
    }
`;

const AvailableColorText = styled.span`
    font-size: 2.5rem;

    @media screen and (max-width: 525px) {
        color: #2b2835;
        font-size: 2rem;
        font-weight: 700;
    }
`;

const ColorText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #2b2835;
`;

const CircleBox = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
`;

const WhiteCircle = styled.div`
    width: 37px;
    height: 37px;
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
    width: 37px;
    height: 37px;
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
    width: 37px;
    height: 37px;
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
    font-size: 2.5rem;
    margin-right: 44px;

    @media screen and (max-width: 525px) {
        margin-right: 1px;
        font-size: 2.16rem;
    }
`;

const FirstProductPromotion = styled.p`
    font-size: 13px;
    font-weight: 500;
    opacity: 0.5168573;

    @media screen and (max-width: 525px) {
        opacity: 0.68459356;
    }
`;

const FirstProductImage = styled.img`
    position: absolute;
    top: 0;
    right: -47px;
    width: 755px;
    height: 755px;

    @media screen and (max-width: 1280px) {
        position: static;
        width: 679.5px;
        height: 679.5px;
    }

    @media screen and (max-width: 1024px) {
        width: 32rem;
        height: 32rem;
    }

    @media screen and (max-width: 525px) {
        width: 22.4rem;
        height: 22.4rem;
    }

    @media screen and (max-width: 425px) {
        width: 348px;
        height: 348px;
    }
`;

const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: 393px 393px 393px;
    justify-items: center;
    align-items: center;
    row-gap: 34px;
    column-gap: 37px;
    width: calc(100% - 186px);
    margin-top: -100px;

    @media screen and (max-width: 1280px) {
        grid-template-rows: 33% 33% 33%;
        grid-template-columns: 50% 50%;
        column-gap: 0;
    }

    @media screen and (max-width: 820px) {
        grid-template-rows: 16.5% 16.5% 16.5% 16.5% 16.5% 16.5%;
        grid-template-columns: 100%;
        margin-top: 0;
        row-gap: 16px;
        width: 100%;
    }
`;
