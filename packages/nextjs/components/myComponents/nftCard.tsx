// import React, { useMemo } from 'react';
import { Address } from "../scaffold-eth";
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

  return balance == 1n ? (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={uri} alt="pfp-nft" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">#{tokenId?.toString()}</h2>
        <Address address={TBAaddress} />
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              <tr>
                <th>id:</th>
                <td>{characterStats?.i}</td>
              </tr>
              <tr>
                <th>xp:</th>
                <td>{characterStats?.x}</td>
              </tr>
              <tr>
                <th>strength</th>
                <td>{characterStats?.s}</td>
              </tr>
              <tr>
                <th>endurance:</th>
                <td>{characterStats?.e}</td>
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
      <figure>
        <img src={uri} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">#{tokenId?.toString()}</h2>
        <Address address={TBAaddress} />
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
