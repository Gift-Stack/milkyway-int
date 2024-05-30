"use client";
import { useConnect, useTransactions } from "@milkyway-engine/wallet";
import { Dialog } from "@milkyway-engine/ui/dialog";
import { Button } from "@milkyway-engine/ui/button";

const SingleTransaction = () => {
  const { account, connect } = useConnect();
  const { loading, sendSingleTransaction } = useTransactions();

  return (
    <div className="flex flex-col items-center justify-center w-full py-4">
      <p className="italic text-sm pb-5 font-medium">
        Attention: You are about to send 0.0001 OSMO to this address
      </p>

      <p className="py-3 px-3 mb-5 rounded-xl bg-card w-full truncate">
        osmo1qnk49vfgl6yyc4ank9papskl9zswv8r8w9ca7w
      </p>

      {!account ? (
        <button
          onClick={connect}
          className="w-full p-3 rounded-lg border border-callout-border"
        >
          Connect wallet to send
        </button>
      ) : (
        <Dialog>
          <Button onPress={() => sendSingleTransaction()} isDisabled={loading}>
            {loading ? "Sending..." : "Send"}
          </Button>
        </Dialog>
      )}
    </div>
  );
};

export default SingleTransaction;