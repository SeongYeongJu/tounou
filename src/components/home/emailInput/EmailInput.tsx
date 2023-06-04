import { styled } from "styled-components";

const EmailInput = () => {
    return (
        <EmailInputWrapper>
            <EmailInputContainer>
                <Title>Hear it first</Title>
                <SubText>
                    Get updates on product drops, collaborations and all things
                    Beats.
                </SubText>
                <InputBarBox>
                    <InputBar placeholder="Enter your email" type="email" />
                </InputBarBox>
                <SignUpButton>SIGN UP</SignUpButton>
            </EmailInputContainer>
        </EmailInputWrapper>
    );
};

export default EmailInput;

const EmailInputWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1440px;
    height: 335px;
    margin-top: 34px;
    margin-bottom: 64px;

    @media screen and (max-width: 1280px) {
        width: 1280px;
        margin-top: 6rem;
    }

    @media screen and (max-width: 1024px) {
        width: 1024px;
    }

    @media screen and (max-width: 820px) {
        width: 100%;
        height: 330px;
        margin-top: 4rem;
    }
`;

const EmailInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 186px);
    height: 335px;
    background-color: #f8f8f9;

    @media screen and (max-width: 820px) {
        width: 393px;
        height: 330px;
    }

    @media screen and (max-width: 425px) {
        width: 341px;
    }
`;

const Title = styled.h1`
    font-size: 3.125rem;
    color: #2b2835;
    font-weight: 700;
    line-height: 55px;
    margin-block-start: 0;
    margin-block-end: 0;

    @media screen and (max-width: 820px) {
        font-size: 2rem;
    }
`;

const SubText = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #030303;

    @media screen and (max-width: 820px) {
        display: block;
        width: 250px;
    }
`;

const InputBarBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 507px;
    height: 36px;
    border-radius: 18px;
    border: 1px solid #bfbfbf;
    background-color: white;
    margin-top: 2rem;

    @media screen and (max-width: 820px) {
        width: 298px;
        height: 36px;
    }
`;

const InputBar = styled.input`
    width: 90%;
    height: 34px;
    font-size: large;
    border: none;
    outline: none;
    background-color: white;

    @media screen and (max-width: 820px) {
        height: 34px;
    }
`;

const SignUpButton = styled.button`
    width: 507px;
    height: 36px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    border-radius: 18px;
    background-color: #ffc700;
    margin-top: 1rem;
    cursor: pointer;

    @media screen and (max-width: 820px) {
        width: 298px;
        height: 36px;
    }
`;
