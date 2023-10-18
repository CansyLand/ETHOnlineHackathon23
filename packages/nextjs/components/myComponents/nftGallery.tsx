import React from "react";
import MintNftCard from "./mintNftCard";
// import { useTokenOfOwnerByIndex } from '../../hooks/myHooks/useTokenOfOwnerByIndex';
import NftCard from "./nftCard";

type NftGalleryProps = {
  tokenBalance: bigint | undefined;
  address: string | undefined;
};

const NftGallery = ({ tokenBalance, address }: NftGalleryProps) => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {tokenBalance && address
          ? Array.from({ length: Number(tokenBalance) }, (_, index) => (
              <div key={index} className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <NftCard tokenIndex={BigInt(index)} tokenAddress={address} />
                </div>
              </div>
            ))
          : null}
        <div key={Number(tokenBalance)} className="flex w-1/3 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <MintNftCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftGallery;
