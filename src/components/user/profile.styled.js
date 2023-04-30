import styled from "@emotion/styled";

export const User = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 250px;
margin: auto;
padding: 20px;
background-color: #ffffff;
border: 1px solid #e4e9f0;
border-radius: 4px;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const Description = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
font-size: 14px;
  color: #a5a5a5;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const Stats = styled.ul`
display: flex;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  background-color: #f2f2f2;
`

export const Label = styled.span`
 font-size: 12px;
  color: #a5a5a5;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
`;

