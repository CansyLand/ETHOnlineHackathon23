import { useEffect, useState } from "react";
import { ExtendedUseScaffoldReadConfig, useScaffoldContractRead } from "../scaffold-eth";
import type { ExtractAbiFunctionNames } from "abitype";
import { AbiFunctionReturnType, ContractAbi, ContractName } from "~~/utils/scaffold-eth/contract";

export function useConditionalScaffoldContractRead<
  TContractName extends ContractName,
  TFunctionName extends ExtractAbiFunctionNames<ContractAbi<TContractName>, "pure" | "view">,
>(shouldExecute: boolean, config: ExtendedUseScaffoldReadConfig<TContractName, TFunctionName>) {
  const [data, setData] = useState<AbiFunctionReturnType<ContractAbi, TFunctionName> | null | undefined>(null);

  // Moved the hook call to the top level
  const result = useScaffoldContractRead(config);

  useEffect(() => {
    if (shouldExecute) {
      // No need for the fetchData function
      setData(result.data);
    }
  }, [shouldExecute, result.data]);

  return { data };
}
