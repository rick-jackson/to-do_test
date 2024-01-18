import styled from "styled-components";
import MuiButton from "@mui/material/Button";

export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Button = styled(MuiButton)`
  min-width: 100px;
  height: 56px;
`;
