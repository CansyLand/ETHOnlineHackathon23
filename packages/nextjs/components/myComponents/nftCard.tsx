// import React, { useMemo } from 'react';
import { useState } from "react";
import { Address } from "../scaffold-eth";
import BoosterPack from "./boosterPack";
import { useDeployedContractInfo, useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import useFetchCharacter from "~~/hooks/tableland/useFetchCharacter";

// import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

// const queryClient = new QueryClient()

const NftCard = ({ tokenIndex, tokenAddress }: { tokenIndex: bigint; tokenAddress: string }) => {
  // Get token ID of Parent NFT
  const { data: tokenId } = useScaffoldContractRead({
    contractName: "GenericNFT",
    functionName: "tokenOfOwnerByIndex",
    args: [tokenAddress, tokenIndex],
    watch: true,
  });

  // Get Image URI
  const { data: uri } = useScaffoldContractRead({
    contractName: "GenericNFT",
    functionName: "tokenURI",
    args: [tokenId],
    watch: false,
  });

  // Figure out wallet tokenbound address
  const { data: accountImplementation } = useDeployedContractInfo("Account");
  const { data: TBAaddress } = useScaffoldContractRead({
    contractName: "ERC6551Registry",
    functionName: "account",
    args: [accountImplementation?.address, BigInt(31337), tokenAddress, tokenId, BigInt(0)],
  });

  // Does Tokenbound account hold an Character RPG NFT?
  const { data: balance } = useScaffoldContractRead({
    contractName: "Character",
    functionName: "balanceOf",
    args: [TBAaddress],
  });

  // Get RPG Character Statistics
  console.log("Token ID", tokenId);
  const characterStats = useFetchCharacter(balance, TBAaddress);
  // const { Character } = useFetchCharacter(balance, TBAaddress);
  console.log(characterStats);

  // Following hooks fired onClick

  // Mint Soulbound character token to Tokenbound account
  const { writeAsync: mintCharacter } = useScaffoldContractWrite({
    contractName: "Character",
    functionName: "mintToTokenbound",
    args: [TBAaddress],
  });

  // Mint Tokenbound Account
  const { writeAsync: createTokenboundAccount } = useScaffoldContractWrite({
    contractName: "ERC6551Registry",
    functionName: "createAccount",
    args: [
      accountImplementation?.address,
      BigInt(31337), // chainId
      tokenAddress, // nft smartcontract address
      tokenId, // nft tokenId
      BigInt(0), // salt
      "0x", // bytes initData
    ],
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
      mintCharacter();
    },
  });

  function initCharacter() {
    createTokenboundAccount();
  }

  const [boosterPackIsMinted, setBoosterPackIsMinted] = useState<boolean | null>(null);

  const handleDataFromChild = (value: boolean) => {
    setBoosterPackIsMinted(value);
  };

  function calculateStats(val: number | undefined) {
    if (!val) return;
    if (boosterPackIsMinted) {
      // return "+" + (val + getRandomInt(1,10) )
      return "+" + Math.floor(val * 1.8);
    } else {
      return val;
    }
  }

  return balance == 1n ? (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={uri} alt="pfp-nft" className="w-full" />{" "}
        {/* Ensure the image takes the full width of its container */}
        <div className="absolute top-0 left-0 p-2 bg-black bg-opacity-50">
          <h2 className="card-title">#{tokenId?.toString()}</h2>
        </div>
        <div className="absolute bottom-0 right-0 p-2 bg-black bg-opacity-50">
          {" "}
          {/* This div will be positioned at the bottom right of the image */}
          <Address address={TBAaddress} />
        </div>
      </figure>

      <div className="card-body">
        <BoosterPack TBAaddress={TBAaddress} sendDataToParent={handleDataFromChild} />
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {/* <tr>
                <th>id:</th>
                <td>{characterStats?.i}</td>
              </tr> */}
              <tr>
                <th>xp:</th>
                <td>{characterStats?.x}</td>
              </tr>
              <tr>
                <th>strength</th>
                <td className={`${boosterPackIsMinted ? "text-green-500 font-bold" : ""}`}>
                  {calculateStats(characterStats?.s)}
                </td>
              </tr>
              <tr>
                <th>endurance:</th>
                <td className={`${boosterPackIsMinted ? "text-green-500 font-bold" : ""}`}>
                  {calculateStats(characterStats?.e)}
                </td>
              </tr>
              <tr>
                <th>wins:</th>
                <td>{characterStats?.w}</td>
              </tr>
              <tr>
                <th>losses:</th>
                <td>{characterStats?.l}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary w-full">Play</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="card bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={uri} alt="pfp-nft" className="w-full" />{" "}
        {/* Ensure the image takes the full width of its container */}
        <div className="absolute top-0 left-0 p-2 bg-black bg-opacity-50">
          <h2 className="card-title">#{tokenId?.toString()}</h2>
        </div>
        <div className="absolute bottom-0 right-0 p-2 bg-black bg-opacity-50">
          {" "}
          {/* This div will be positioned at the bottom right of the image */}
          <Address address={TBAaddress} />
        </div>
      </figure>
      <div className="card-body">
        <div className="card-actions">
          <button className="btn btn-active btn-primary w-full" onClick={initCharacter}>
            Recruit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
