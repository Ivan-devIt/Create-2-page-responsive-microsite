import styled from "styled-components";
import { media } from "../media";

export const Navbar = styled.nav`
  position: sticky;
  z-index: 100;
  top: 0;
  height: ${({ theme }) => theme.sizes.header.height}px;
  width: 100%;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.gray};

  ul {
    display: flex;

    li {
      &:not(:last-of-type) {
        margin-right: 3rem;
      }

      a {
        font-size: 2rem;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
        font-weight: 600;
        transition: color ${({ theme }) => theme.durations.ms300}ms linear;

        &:hover,
        &.active {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }

  ${media.lessThan("xl")`
     ul {
      li {
        a {
          font-size: 1.8rem;
        }
      }
    }
  `}

  ${media.lessThan("lg")`
     ul {
      li {
        &:not(:last-of-type) {
          margin-right: 1.5rem;
        }
      }
    }
  `}

  ${media.lessThan("sm")`
    padding: 0 2rem;

    ul {
      li {
        &:not(:last-of-type) {
          margin: 10px auto;
        }
      }
    }
  `}
`;

export const NavLogo = styled.div`
  width: 40px;
  height: 40px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

interface MobileNavProps {
  show: boolean;
}

export const MobileNav = styled.div`
  ul {
    position: absolute;
    z-index: 1;
    min-width: 100vw;
    left: ${({ show }: MobileNavProps) => (show ? 0 : "-100%")};
    top: ${({ theme }) => theme.sizes.header.height}px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: left ${({ theme }) => theme.durations.ms300}ms linear;

    li {
      margin: 10px auto;
      width: 100%;

      a {
        display: inline-block;
        text-align: center;
        width: 100%;
        font-size: 1.6rem;
      }
    }
  }
`;

export const BtnWrapper = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;
