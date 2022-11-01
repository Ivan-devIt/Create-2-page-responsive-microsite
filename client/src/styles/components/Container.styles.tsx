import styled from "styled-components";
import { baseTheme } from "../theme";

const {
  sizes: { footer, header, container },
} = baseTheme;

export const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  max-width: ${container.width}px;
  min-height: calc(100vh - ${footer.height}px - ${header.height}px);
  font-size: 1.6rem;
`;
