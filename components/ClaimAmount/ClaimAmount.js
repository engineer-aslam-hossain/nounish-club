import { useEthers } from "@usedapp/core";
import { useNumberOfClaims } from "../../hooks/hooks";

const ClaimAmount = () => {
  const { account } = useEthers();
  const claims = useNumberOfClaims(account);

  return (
    <h2>Claims available: {typeof claims === "undefined" ? "..." : claims}</h2>
  );
};

export default ClaimAmount;
