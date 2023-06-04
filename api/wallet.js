import { useThirdweb } from "@thirdweb-dev/react";

async function fetchWalletAddressAndBalance() {
  try {
    // Use the useThirdweb hook
    const { thirdweb, address } = useThirdweb();

    // Get the ETH balance of the address
    const balance = await thirdweb.getBalance(address);

    // Convert the balance from wei to ether
    const ether = thirdweb.utils.fromWei(balance, 'ether');

    // Log the results
    console.log('Wallet address:', address);
    console.log('ETH balance:', ether);
  } catch (error) {
    // Handle any errors
    console.error(error);
  }
}

// Call the function
fetchWalletAddressAndBalance();
