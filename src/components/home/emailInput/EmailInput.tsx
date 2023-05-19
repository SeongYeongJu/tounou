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
    width: 100%;
    height: 500px;
`;

const EmailInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 200px);
    min-width: 680px;
    height: 400px;
    background-color: #f8f8f9;
    @media screen and (max-width: 720px) {
        min-width: 340px;
        height: 330px;
    }
`;

const Title = styled.h1`
    font-size: 3.15rem;
    margin-block-start: 0;
    margin-block-end: 0;
`;

const SubText = styled.p`
    font-size: 1.1rem;
    font-weight: 400;
    @media screen and (max-width: 720px) {
        display: block;
        width: 230px;
        font-size: 14px;
    }
`;

const InputBarBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 670px;
    height: 46px;
    border-radius: 30px;
    border: 1px solid #858383;
    background-color: white;
    margin-top: 2rem;
    @media screen and (max-width: 720px) {
        width: 90%;
        height: 30px;
    }
`;

const InputBar = styled.input`
    width: 90%;
    height: 36px;
    font-size: large;
    border: none;
    outline: none;
    background-color: white;
    @media screen and (max-width: 720px) {
        height: 20px;
    }
`;

const SignUpButton = styled.button`
    width: 670px;
    height: 46px;
    border: none;
    font-size: large;
    border-radius: 30px;
    background-color: #ffc700;
    margin-top: 1rem;
    cursor: pointer;
    @media screen and (max-width: 720px) {
        width: 90%;
        height: 30px;
    }
`;
