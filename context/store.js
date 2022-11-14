import { createContext, useEffect, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { Contract, ethers } from "ethers";
import { chainHex } from "../config";
import abis from "../utils/abi.json";
import { successNotify, warningNotify, errorNotify } from "../helpers/notify";

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [web3Modal, setWeb3Modal] = useState(undefined);
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [walletBalance, setWalletBalance] = useState(undefined);
  const [chainId, setChainId] = useState(undefined);
  const [currentProvider, setCurrentProvider] = useState(undefined);
  const [isBsc, setIsBsc] = useState(null);
  const [contract, setContract] = useState(
    new Contract("0x5FD520B6698085A66D9F4B4C61bBEa2C789DB605", abis)
  );
  const [isDonationLoading, setIsDonationLoading] = useState(false);
  useEffect(() => {
    if (window.localStorage) {
      setConnected(JSON.parse(localStorage.getItem("wallet_connect")));
    }
    // getNftsFromPinata()
  }, []);

  useEffect(() => {
    initWeb3Modal();
    if (connected) {
      handleConnect();
    }
  }, [setWeb3Modal, web3Modal]);

  useEffect(() => {
    if (!!wallet && !contract.signer) {
      setContract(contract.connect(wallet));
    }
  }, [wallet, contract]);

  useEffect(() => {
    if (isBsc == false) {
      warningNotify("Please connect to Binance Smart Chain");
      switchNetwork(chainHex);
    }
  }, [isBsc]);

  const initWeb3Modal = async () => {
    try {
      if (!web3Modal) {
        const providerOptions = {
          metamask: {
            id: "injected",
            name: "MetaMask",
            type: "injected",
            check: "isMetaMask",
          },
          walletconnect: {
            package: WalletConnectProvider, // required
            options: {
              rpc: {
                56: "https://bsc-dataseed.binance.org/",
              },
              network: "binance",
              qrcodeModalOptions: {
                mobileLinks: ["metamask", "trust"],
              },
            },
          },
        };

        const web3Modal = new Web3Modal({
          network: "binance",
          cacheProvider: true,
          providerOptions,
          theme: "dark",
        });

        setWeb3Modal(web3Modal);
      }
    } catch (error) {
      errorNotify("init web3 modal error");
    }
  };

  const switchNetwork = async (newChainId) => {
    if (currentProvider) {
      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: newChainId }],
        });
        handleConnect();
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          /*
           try {
         await ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{ chainId: '0xf00', rpcUrl: 'https://...' }],
        });
        } catch (addError) {
           // handle "add" error
        }
          */
        }
        // handle other "switch" errors
      }
    }
  };

  useEffect(() => {
    if (chainId) {
      if (chainId === chainHex) {
        setIsBsc(true);
      } else {
        setIsBsc(false);
      }
    }
  }, [chainId]);

  const handleConnect = async () => {
    const provider = await web3Modal?.connect();

    if (provider) {
      const newWeb3 = new ethers.providers.Web3Provider(provider);
      const accounts = await newWeb3.listAccounts();
      const balance = await newWeb3.getBalance(accounts[0]);

      setWalletBalance(ethers.utils.formatEther(balance));
      setWalletAddress(accounts[0]);
      setWallet(newWeb3.getSigner());
      setConnected(true);

      if (newWeb3.provider.chainId === 56) {
        setChainId("0x38");
      } else {
        setChainId(newWeb3.provider.chainId);
      }

      setCurrentProvider(provider);

      if (window.localStorage) {
        window.localStorage.setItem("wallet_connect", true);
      }

      provider.on("accountsChanged", (newAccounts) => {
        if (Array.isArray(newAccounts) && newAccounts.length) {
          setWalletAddress(newAccounts[0]);
        }
      });

      provider.on("chainChanged", (chainId, oldChainId) => {
        setChainId(chainId);
      });

      provider.on("disconnect", (error) => {
        handleDisconnect();
      });
    } else {
      await handleDisconnect();
    }
  };

  const handleDisconnect = async () => {
    setConnected(false);
    setWalletAddress(undefined);
    setWallet(undefined);
    if (web3Modal) {
      await web3Modal.clearCachedProvider();
    }
    if (window.localStorage) {
      window.localStorage.setItem("wallet_connect", false);
    }

    if (window) {
      window.location.reload();
    }
  };

  const checkTransaction = async (hash) => {
    if (currentProvider) {
      const newWeb3 = new ethers.providers.Web3Provider(currentProvider, "any");
      return await newWeb3.perform("getTransactionReceipt", {
        transactionHash: hash,
      });
    }
    return null;
  };

  const waitForTransaction = (hash, timeOut = 1000) => {
    return new Promise((resolve, reject) => {
      if (hash === null || hash === undefined) {
        reject();
        return;
      }
      const interval = setInterval(async () => {
        const result = await checkTransaction(hash);
        if (result) {
          if (result.status === "0x1" || result.status === 1) {
            resolve();
          } else {
            reject();
          }

          clearInterval(interval);
        }
      }, timeOut);
    });
  };

  const donate = async (amount) => {
    let newAmount = amount.toString().replaceAll(",", ".");
    try {
      setIsDonationLoading(true);
      const tx = await contract.donateBnb({
        value: ethers.utils.parseEther(newAmount),
      });
      await waitForTransaction(tx.hash, 1000);
      setIsDonationLoading(false);
      successNotify("Transaction success");
    } catch (error) {
      setIsDonationLoading(false);
      errorNotify(`Transaction failed: ${error?.data?.message?.split(":")[1]}`);
    }
  };
  return (
    <StoreContext.Provider
      value={{
        web3Modal,
        connected,
        walletAddress,
        wallet,
        walletBalance,
        chainId,
        currentProvider,
        handleConnect,
        handleDisconnect,
        isBsc,
        switchNetwork,
        donate,
        isDonationLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
