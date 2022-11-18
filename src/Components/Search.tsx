import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context";

type Props = {};

const Search = (props: Props) => {
  const { SearchParameters } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };
  const SubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchValue.length) {
      SearchParameters(searchValue);
    }
  };
  return (
    <SearchContainer onSubmit={SubmitForm}>
      <SearchInput
        type="text"
        placeholder="Search for Pokemons"
        onChange={handleChange}
        value={searchValue}
      />
      <SearchButton type="submit" value="Search" />
    </SearchContainer>
  );
};

const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
`;
const SearchInput = styled.input`
  width: 525px;
  height: 45px;
  border: 1px solid var(--mainBlue);
  padding-left: 14px;
  font-weight: bold;
  color: var(--mainAsh);
  ::placeholder {
    font-size: 14px;
    color: var(--mainAsh);
    font-weight: 700;
  }
`;
const SearchButton = styled.input`
  height: 49px;
  width: 100px;
  margin-left: -3px;
  background-color: var(--mainBlue);
  display: flex;
  border-color: transparent;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  outline: 0;
`;
export default Search;
