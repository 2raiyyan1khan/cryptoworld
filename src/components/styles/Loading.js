import styled, { css } from "styled-components";

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 100px 0;
  ${({ home }) =>
    home
      ? css`
          height: 100%;
        `
      : css`
          height: 100vh;
        `};
`;
