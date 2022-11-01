import styled from "styled-components";
import { media } from "../media";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: ${({ theme }) => theme.sizes.footer.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 6px ${({ theme }) => theme.colors.gray};

  ul {
    display: flex;

    li {
      a {
        margin: 0 10px;
        font-size: 2rem;
        font-weight: 600;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};

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

  ${media.lessThan("sm")`
     ul {
      li {
        a {
           margin: 0 5px;
          font-size: 1.6rem;
        }
      }
    }
  `}
`;
