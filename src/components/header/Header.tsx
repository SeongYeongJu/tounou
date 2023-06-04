import { styled } from "styled-components";
import logoImg from "../../assets/logo/logo.svg";
import searchIcon from "../../assets/icons/search.png";
import buyIcon from "../../assets/icons/buy.png";
import profileIcon from "../../assets/icons/profile.png";
import groupIcon from "../../assets/icons/Group.png";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderItemBox>
                {/* <LogoBox> */}
                <HeaderLogo src={logoImg} />
                {/* </LogoBox> */}
                <TextBox>
                    <CategoryText>HEADPHONES</CategoryText>
                    <CategoryText>EARPHONES</CategoryText>
                    <CategoryText>SPEAKERS</CategoryText>
                    <CategoryText>EXPLORE</CategoryText>
                </TextBox>
                <IconBox>
                    <Icon src={searchIcon} />
                    <Icon src={profileIcon} />
                    <Icon src={buyIcon} />
                </IconBox>
                <GroupIcon src={groupIcon} />
            </HeaderItemBox>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(25, 23, 32, 0.46756417);
    width: 1440px;
    height: 78px;
    background-blend-mode: normal;
    z-index: 1;

    @media screen and (max-width: 1280px) {
        width: 100%;
        min-width: 1024px;
    }

    @media screen and (max-width: 820px) {
        width: 100%;
        min-width: 280px;
    }

    @media screen and (max-width: 525px) {
        height: 54px;
        background: none;
    }

    @media screen and (max-width: 425px) {
        width: 100%;
    }
`;

const HeaderItemBox = styled.div`
    width: calc(100% - 186px);
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1280px) {
        width: calc(100% - 74px);
    }
`;

export const HeaderLogo = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
    opacity: 1;

    @media screen and (max-width: 525px) {
        width: 27px;
        height: 27px;
    }
`;

const TextBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    min-width: 480px;
    @media screen and (max-width: 820px) {
        display: none;
    }
`;

const CategoryText = styled.span`
    color: white;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        transition: 0.15s;
        transform: scale(1.02);
    }
`;

const IconBox = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 25%;
    width: 200px;
    @media screen and (max-width: 820px) {
        display: none;
    }
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

const GroupIcon = styled.img`
    display: none;

    @media screen and (max-width: 820px) {
        display: block;
        width: 24px;
        height: 24px;
        cursor: pointer;
    }

    @media screen and (max-width: 525px) {
        width: 16px;
        height: 12px;
    }
`;
