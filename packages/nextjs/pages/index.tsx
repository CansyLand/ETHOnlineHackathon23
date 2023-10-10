import { useEffect, useState } from "react";
import Link from "next/link";
import { TokenboundClient } from "@tokenbound/sdk";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const TokenBound: NextPage = () => {
  //// TOKENBOUND
  const tokenContract = "0xA4899D35897033b927acFCf422bc745916139776";
  const tokenId = "1";

  // Declare a state variable to hold the tokenBoundAccount data
  const [tokenBoundAccount, setTokenBoundAccount] = useState<string | null>(null);
  const [isAccountDeployed, setIsAccountDeployed] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const tokenboundClient = new TokenboundClient({ chainId: 1 });

      const tokenBoundAccount = tokenboundClient.getAccount({
        tokenContract: tokenContract,
        tokenId: tokenId,
      });

      const isAccountDeployed = await tokenboundClient.checkAccountDeployment({
        accountAddress: tokenBoundAccount,
      });

      // Update state with the fetched data
      setTokenBoundAccount(tokenBoundAccount);
      setIsAccountDeployed(isAccountDeployed);
    };

    fetchData();
  }, []);

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">TokenBound Account</span>
          </h1>
          <p className="text-center text-lg">
            Token Address{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              {tokenContract}
            </code>
          </p>
          <p className="text-center text-lg">
            Tokenbound Account{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              {tokenBoundAccount}
            </code>{" "}
            <br />
            ID:{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              {tokenId}
            </code>
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>Account Deployed: {isAccountDeployed ? "Yes" : "No"}</p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <p>
                Experiment with{" "}
                <Link href="/example-ui" passHref className="link">
                  Example UI
                </Link>{" "}
                to build your own UI.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenBound;
