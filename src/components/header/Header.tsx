import { styled } from "styled-components";
import logoImg from "../../assets/logo/logo.svg";
import searchIcon from "../../assets/icons/search.png";
import buyIcon from "../../assets/icons/buy.png";
import profileIcon from "../../assets/icons/profile.png";
import groupIcon from "../../assets/icons/Group.png";

const Header = () => {
    return (
        <HeaderContainer>
            <LogoBox>
                <Logo src={logoImg} />
            </LogoBox>
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

    /* width: 100%;
    min-width: 1000px; */
    width: 100vw;
    min-width: 60vw;
    height: 78px;
    background-blend-mode: normal;
    z-index: 1;
    @media screen and (max-width: 866px) {
        gap: 60%;
    }
`;

const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    width: 8%;
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
    opacity: 1;
`;

const TextBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    min-width: 480px;
    @media screen and (max-width: 866px) {
        display: none;
    }
`;

const CategoryText = styled.span`
    color: white;
    cursor: pointer;
    &:hover {
        transition: 0.15s;
        transform: scale(1.02);
    }
`;

const IconBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
    @media screen and (max-width: 866px) {
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
    @media screen and (max-width: 866px) {
        display: block;
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
`;
