import { HiArrowRightOnRectangle, HiOutlineUser, HiSun } from "react-icons/hi2";
import styled from "styled-components";

const StyledHeaderMenu = styled.ul`
                display: flex;
                gap: 1.4rem;
                `;

const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <li>
                <HiOutlineUser />
            </li>
            <li>
                <HiSun />
            </li>
            <li>
                <HiArrowRightOnRectangle />
            </li>
        </StyledHeaderMenu>
    );
};

export default HeaderMenu;