import styled from "styled-components";

export const DetailsSection = styled.section`
  margin-top: 90px;
`;
export const DetailsMain = styled.main``;
export const DetailsArticle = styled.article`
  & h2 {
    text-align: center;
  }
  & img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 20px auto;
  }
  &:first-child {
    text-align: center;
  }
`;
export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 20px 0;
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Item = styled.li`
  padding: 10px 0;
  & a {
    color: #6f6bfa;
  }
`;

export const Hr = styled.div`
  border-bottom: 1px solid #404040;
  margin-bottom: 40px;
`;
