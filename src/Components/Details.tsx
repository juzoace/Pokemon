import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { baseURL } from "../constant";
import axios from "axios";
import styled from "styled-components";
import { Container } from "./AllList";
import Back from "../assets/arrow_back.svg";

type ImageProps = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};
type Species = {
  name: string;
};

interface DetailsObj {
  sprites: ImageProps;
  abilities: Array<any>;
  stats: Array<any>;
  species: Species;
  name: string;
  base_experience: string;
  types: Array<any>;
  weight: number;
}

const Details = () => {
  const [imgState, setImgState] = useState("");
  const [details, SetDetails] = useState<DetailsObj>();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleCurrent = (img: any) => {
    setImgState(img);
  };
  const goBack = () => {
    navigate("/");
  };
  useEffect(() => {
    axios
      .get(`${baseURL}pokemon/${id}`)
      .then((res) => {
        setImgState(res?.data?.sprites?.front_default);
        SetDetails(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <Container>
      <DetailsHeader>
        <img src={Back} alt="Back" onClick={goBack} /> {details?.name} details
      </DetailsHeader>
      <Description>
        <DescriptionDetails>
          <DescImg>
            <img src={imgState} alt="Pokemon" />
          </DescImg>
          <DescText>
            <h3>Description</h3>
            <p>Name : {details?.species?.name}</p>
            <p>Experience: {details?.base_experience}</p>
            <p>Weight: {details?.weight}</p>
            <p>
              Abilities :
              {details?.abilities?.map((elem, i) => {
                return <li key={i}>{elem?.ability?.name}</li>;
              })}
            </p>
            <div>
              Stats:{" "}
              <StatDetails>
                {details?.stats?.map((elem) => {
                  return (
                    <div>
                      {elem?.stat?.name} (<span>{elem?.base_stat}</span>) ,{" "}
                    </div>
                  );
                })}
              </StatDetails>
            </div>
          </DescText>
        </DescriptionDetails>
        <ThumbNails>
          <Thumb
            onClick={() => {
              handleCurrent(details?.sprites?.front_default);
            }}
          >
            <img
              src={details?.sprites?.front_default}
              alt="Pokemon thumbnails"
            />
          </Thumb>
          <Thumb
            onClick={() => {
              handleCurrent(details?.sprites?.back_default);
            }}
          >
            <img
              src={details?.sprites?.back_default}
              alt="Pokemon thumbnails"
            />
          </Thumb>
          <Thumb
            onClick={() => {
              handleCurrent(details?.sprites?.back_shiny);
            }}
          >
            <img src={details?.sprites?.back_shiny} alt="Pokemon thumbnails" />
          </Thumb>
          <Thumb
            onClick={() => {
              handleCurrent(details?.sprites?.front_shiny);
            }}
          >
            <img src={details?.sprites?.front_shiny} alt="Pokemon thumbnails" />
          </Thumb>
        </ThumbNails>
      </Description>
    </Container>
  );
};

export default Details;

const DetailsHeader = styled.h3`
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  letter-spacing: -0.9px;
  display: flex;
  align-items: center;
  gap: 15px;
  img {
    width: 35px;
    height: 35px;
    :hover {
      cursor: pointer;
    }
  }
`;
const DescImg = styled.div`
  width: 378px;
  height: 378px;
  border: 0.2px solid var(--mainAsh);
  img {
    width: 378px;
    height: 378px;
  }
  @media (max-width: 426px) {
    width: 340px;
    height: 340px;
    img {
      width: 340px;
      height: 340px;
    }
  }
`;
const DescriptionDetails = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Description = styled.div`
  @media (max-width: 426px) {
    width: 340px;
    margin: auto;
  }
`;
const DescText = styled.div`
  text-align: left;
  p {
    font-weight: bold;
  }
  h3 {
    font-size: 36px;
    font-weight: 300;
    letter-spacing: -0.9px;
    margin-top: 0px;
  }
`;
const StatDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const ThumbNails = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 40px;
`;
const Thumb = styled.div`
  width: 120px;
  height: 120px;
  border: 0.2px solid var(--mainAsh);
  img {
    width: 120px;
    height: 120px;
  }
  :hover {
    cursor: pointer;
  }
`;
