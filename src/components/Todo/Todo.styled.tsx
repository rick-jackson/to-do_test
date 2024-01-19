import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-image: url(https://images.unsplash.com/photo-1486673748761-a8d18475c757?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9hZHxlbnwwfHwwfHx8MA%3D%3D);
  background-size: cover;
`;

export const Content = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.palette.error.main};
`;
