import { useEthers } from "@usedapp/core";
import { useCallback, useEffect } from "react";
import { useNumberOfClaims } from "../../hooks/hooks";

const ClaimAmount = ({ handleClickOpen }) => {
  const { account, isLoading } = useEthers();
  const claims = useNumberOfClaims(account);

  const handleSubmit = useCallback(() => {
    const loading = account && typeof claims === "undefined";

    if (!isLoading && loading) {
      handleClickOpen();
    }
  }, [claims, account, isLoading, handleClickOpen]);

  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);

  return (
    <h6>Claims available: {typeof claims === "undefined" ? "x" : claims}</h6>
  );
};

export default ClaimAmount;
