import styled from "styled-components";

export const NewsMainContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem 1.5rem;
  padding: 30px 0;
`;
export const NewsCard = styled.main`
  background-color: #181818;
  padding: 10px;
  border-radius: 10px;
`;
export const NewsHeader = styled.article`
  display: flex;
  align-items: flex-start;
`;
export const NewsImg = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
  background-size: cover;
  margin-right: 10px;
  border-radius: 10px;
`;

export const NewsTitle = styled.h5`
  text-align: left;
`;
export const NewsDescription = styled.article`
  text-align: left;
  color: #b3b3b3;
`;
export const NewsFooter = styled.article`
  border-top: 1px solid #404040;
  padding-top: 10px;
  & small {
    display: flex;
    align-items: center;
    color: #b3b3b3;
  }
  & img {
    width: 45px;
    height: 45px;
    background-color: #6f6bfa;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
