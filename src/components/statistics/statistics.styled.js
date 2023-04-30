import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e4e9f0;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  margin: 20px;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  padding: 20px;
  text-align: center;
  width: 100%;
`;

export const Label = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
`;
