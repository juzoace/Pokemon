import React, { createContext, useState, useMemo } from "react";
import axios from "axios";
import { baseURL} from "./constant";

export interface IAppProps {}
interface InitContextProps {
  FetchAll: Function;
  SearchParameters: Function;
  allState: Array<PokemonObj>;
  searchResult: Array<PokemonObj>;
  searchWord: string;
}
interface PokemonObj {
  name: string;
  url: string;
}

const AppContext = createContext({} as InitContextProps);

const AppProvider = ({ children }: any) => {
  const [allState, setAllState] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const FetchAll = () => {
    axios
      .get(`${baseURL}pokemon?limit=100`)
      .then((res) => {
        setAllState(res?.data?.results);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const SearchParameters = (search: string) => {
    const filter = allState?.filter(
      (pokemon: PokemonObj) => search.toLowerCase() === pokemon.name
    );
    setSearchResult(filter);
    setSearchWord(search);
  };
  useMemo(() => {
    FetchAll();
  }, []);
  return (
    <AppContext.Provider
      value={{ allState, FetchAll, SearchParameters, searchResult, searchWord }}
    >
      {children}
    </AppContext.Provider>
  );
};

const AppConsumer = AppContext.Consumer;
export { AppContext, AppProvider, AppConsumer };
