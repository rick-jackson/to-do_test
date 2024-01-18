import styled from "styled-components";
import MuiList, { type ListProps } from "@mui/material/List";
import { Typography } from "@mui/material";

export const List = styled(MuiList)<ListProps>`
  padding: 0px !important;
`;

export const EmptyList = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  font-weight: 700 !important;
  font-size: 1.4rem !important;
`;
