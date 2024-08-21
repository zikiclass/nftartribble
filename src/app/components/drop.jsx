"use client";
import VerifiedIcon from "@mui/icons-material/Verified";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { CldImage } from "next-cloudinary";
const Drop = ({ small, name, minting, price, bg, status, id }) => {
  return (
    <Link href={`/mint?id=${id}`}>
      <Container>
        <Div>
          <CldImage
            src={bg}
            width={100}
            height={200}
            alt="NFT Image"
            style={{
              width: "100%",
              height: "200px",
            }}
          />

          <Button>Mint Now</Button>
        </Div>
        <Small>
          {small} <VerifiedIcon style={{ color: "yellow", fontSize: "15px" }} />
        </Small>
        <Span>{name}</Span>
        <BottomDiv>
          <Bottom>
            {status === "mint" ? (
              <Small>Minting</Small>
            ) : status === "comp" ? (
              <Small>Status</Small>
            ) : (
              <Small>Starts in</Small>
            )}
            <Span_>{minting}</Span_>
          </Bottom>
          <Bottom>
            <Small>Price</Small>
            <Span_>{price}</Span_>
          </Bottom>
        </BottomDiv>
      </Container>
    </Link>
  );
};

export default Drop;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
  overflow: hidden;
  border: 1.5px solid #2b2e31;
  padding: 8px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    scale: 1.04;
  }
  @media screen and (max-width: 760px) {
    width: 185px;
  }
`;
const Button = styled.button`
  position: absolute;
  left: 50%;
  top: 85%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  color: #000;
  font-size: 12px;
  font-weight: bold;
  width: 70%;
  opacity: 0;
  transition: all 0.2s ease-in-out;
`;

const Div = styled.div`
  overflow: hidden;
  border-radius: 13px;
  position: relative;
  &:hover ${Button} {
    opacity: 1;
  }
  @media screen and (max-width: 760px) {
    height: 160px;
  }
`;

const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const Small = styled.small`
  color: #ccc;
  font-size: 10px;
`;
const Span_ = styled.span`
  font-size: 11px;
  font-weight: bold;
`;

const Span = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;
