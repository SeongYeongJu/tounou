import { styled } from "styled-components";
import BuyBotton from "../../buttons/BuyBotton";

const Product = ({ product }: { product: ItemType }) => {
    // 각각의 상품들입니다.
    return (
        <ProductBox key={product?.id}>
            <ProductImage src={product?.imageURL} />
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
    width: 68%;
    min-width: 22rem;
    height: 90%;
    background: #f8f8f9;
    &:hover {
        transform: scale(1.01);
        transition: 0.2s;
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
    font-size: 2.5rem;
    font-weight: 500;
    margin-block-start: 0;
    margin-block-end: 0;
`;

const ProductDescription = styled.span`
    display: block;
    width: 16.7rem;
    line-height: 1.2rem;
    color: #030303;
`;

const ProductPrice = styled.span`
    color: #9d8220;
    font-size: 1.7rem;
    font-weight: 600;
    margin-right: 1rem;
`;

const PriceAndButtonBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;
