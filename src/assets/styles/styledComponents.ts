import styled from "@emotion/styled";

interface Props {
  width?: string | number;
}

export const Image = styled.img<Props>`
  width: ${({ width }) => width ?? "15px"};
`;
