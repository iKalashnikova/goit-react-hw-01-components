import styled from '@emotion/styled';


export const Item = styled.li`
display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(38, 38, 38, 0.2);
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.p` 
  margin-right: auto;
`;


export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => (props.isOnline ? '#42b72a' : '#e81c1c')}
`;

