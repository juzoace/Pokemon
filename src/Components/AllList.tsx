import React, { useContext } from "react";
import styled from "styled-components";
import HeaderImg from "../assets/Header.svg";
import Search from "./Search";
import { Link } from "react-router-dom";
import { AppContext } from "../Context";
import Back from "../assets/arrow_back.svg";

export interface IAppProps {
  name: string;
  url: string;
}
const ListCard = (props: IAppProps) => {
  return (
    <StyledLink to={`pokemon/${props.name}`}>
      <div>{props.name}</div>
    </StyledLink>
  );
};

export default function App() {
  const { allState, searchResult, searchWord, SearchParameters } =
    useContext(AppContext);
  const GoBack = () => {
    SearchParameters("");
  };
  return (
    <>
      <Header>Pokemon Dex</Header>
      <Container>
        {searchResult?.length ? (
          searchResult.map((search, i) => {
            return (
              <div key={i}>
                <DataSetName>
                  <img src={Back} alt="Go Back" onClick={GoBack} />
                  <p>Search Result for {searchWord}</p>
                  
                </DataSetName>
               
                <ListWrapper>
                  <ListCard key={i} name={search.name} url={search.url} />
                </ListWrapper>
              </div>
            );
          })
        ) : (
          <>
            <Search />
            <hr/>
            <ListHeader>All Pokemon</ListHeader>
            <ListWrapper>
              {allState?.map((elem, i) => {
                return (
                
                <ListCard key={i} name={elem.name} url={elem.url} />
               
                )
              })}
            </ListWrapper>
          </>
        )}
      </Container>
    </>
  );
}

export const Container = styled.div`
  @media (min-width: 1336.1px) {
    width: 1100px;
    margin: auto;
  }
  @media (max-width: 1336px) {
    width: 90%;
    margin: auto;
    @media (max-width: 426px) {
      width: 340px;
    }
  }
  hr{
    width:800px;
    outline:0;
    border:1px solid var(--mainBlue);
    margin-top:30px;
    @media(max-width:1336px){
      width:80%;
    }
  }
  
`;
const ListHeader = styled.div `
font-size:14px;
color:black;
font-weight:bold;
letter-spacing:-0.8px;
margin-top:20px;
text-align:left;

`
const DataSetName = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top:30px;
  
  img {
    width: 35px;
    height: 35px;
  }
`;
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
  padding-bottom:60px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${HeaderImg});
  background-size: cover;
  height: 140px;
  font-weight: bold;
  font-size: 36px;
  letter-spacing: -1px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  div {
    width: 185px;
    border: 1px solid var(--mainAsh);
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-sze: 12px;
    color: var(--mainAsh);
    font-weight: bold;
    letter-spacing: -0.4px;
    border-radius: 5px;
    @media(max-width:576px){
      width:150px;
    }
  }
`;

