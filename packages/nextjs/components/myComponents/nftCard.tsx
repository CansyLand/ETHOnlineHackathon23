// import React, { useMemo } from 'react';
// import { Database } from "@tableland/sdk";
import { Address } from "../scaffold-eth";
import { useDeployedContractInfo, useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

// import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

// const queryClient = new QueryClient()

const NftCard = ({ tokenIndex, tokenAddress }: { tokenIndex: bigint; tokenAddress: string }) => {
  // Get token ID
  const { data: tokenId } = useScaffoldContractRead({
    contractName: "GenericNFT",
    functionName: "tokenOfOwnerByIndex",
    args: [tokenAddress, tokenIndex],
    watch: false,
  });

  // Get Image URI
  const { data: uri } = useScaffoldContractRead({
    contractName: "GenericNFT",
    functionName: "tokenURI",
    args: [tokenId],
    watch: false,
  });

  // Get RPG Character Statistics
  //

  // Figure out wallet address
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

  // If Tokenbound account holds RPG NFT get tokenId

  // Get Tableland data
  const { data: tableId } = useScaffoldContractRead({
    contractName: "Character",
    functionName: "tableId",
  });

  const tableName: string = "c_31337_" + tableId;
  // interface Character {
  //     i: number;
  //     x: number;
  //     s: number;
  //     e: number;
  //     w: number;
  //     l: number;
  //   }
  console.log("tableName:", tableName);
  // const db: Database<Character> = new Database();
  // const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
  // console.log(results);
  // character = results;
  // http://localhost:8080/api/v1/query?statement=select%20x%20i%20from%20c_31337_9

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
  // ❌✅❌✅❌✅❌✅❌✅❌✅
  // Warning: Using `<img>` could result in slower LCP and higher bandwidth.
  // Use `<Image />` from `next/image` instead to utilize Image Optimization.
  // See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
  return balance == 1n ? (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={uri} alt="PFP" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">#{tokenId?.toString()}</h2>
        <Address address={TBAaddress} />
        <div className="card-actions justify-end">
          <button className="btn btn-warning">Select</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={uri} alt="PFP" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">#{tokenId?.toString()}</h2>
        <Address address={TBAaddress} />
        <div className="card-actions justify-end">
          <button className="btn btn-active btn-primary" onClick={initCharacter}>
            Recruit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
