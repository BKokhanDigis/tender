import styled from 'styled-components';

export const ScreenWrapper = styled.div`
  width: 100%;
  height: fit-content; 
  background-color: #f9fafa;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export const Title = styled.div`
font-family: 'DM Sans', sans-serif;
  margin-top: 60px;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SubTitle = styled.div`
font-family: 'DM Sans', sans-serif;
color: #475466;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 40px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px; 
`;