import { styled } from "styled-components";
import BuyBotton from "../../buttons/BuyBotton";

const Product = ({ product }: { product: ItemType }) => {
    // 각각의 상품들입니다.
    return (
        <ProductBox key={product?.id}>
            <ProductImage src={product?.imageURL} loading="lazy" />
            <ProductTextBox>
                <ProductTitle>{product?.title}</ProductTitle>
                <ProductDescription>{product?.description}</ProductDescription>
                <PriceAndButtonBox>
                    <ProductPrice>{product?.price}</ProductPrice>
                    <BuyBotton color="black" productID={product?.id} />
                </PriceAndButtonBox>
            </ProductTextBox>
        </ProductBox>
    );
};

export default Product;

const ProductBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 393px;
    height: 560px;
    background: #f8f8f9;
    &:hover {
        transform: scale(1.01);
        transition: 0.2s;
    }

    @media screen and (max-width: 425px) {
        width: 341px;
    }
`;

const ProductImage = styled.img`
    width: 75%;
    height: 55%;
`;

const ProductTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 75%;
`;

const ProductTitle = styled.h1`
    font-size: 3.125rem;
    font-weight: 500;
    color: #2b2835;
    margin-block-start: 0;
    margin-block-end: 0;

    @media screen and (max-width: 425px) {
        font-size: 2.5rem;
    }
`;

const ProductDescription = styled.span`
    display: block;
    font-size: 14px;
    width: 16rem;
    line-height: 1.2rem;
    color: #030303;
`;

const ProductPrice = styled.span`
    color: #9d8220;
    font-size: 25px;
    font-weight: 600;
    margin-right: 27px;

    @media screen and (max-width: 425px) {
        margin-right: 10px;
    }
`;

const PriceAndButtonBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;
