import { Link } from "@mui/material";
import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background: ${({ theme }) => theme.palette.primary.background};
  padding: ${({ theme }) => theme.spacing(3)};
  height: fit-content;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconLink = styled(Link)`
  display: flex;
`;
