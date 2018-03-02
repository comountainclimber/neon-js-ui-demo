import { wallet } from "@cityofzion/neon-js";

export function isWallet(address) {
  console.log(wallet.isAddress(address));
  return wallet.isAddress(address);
}
