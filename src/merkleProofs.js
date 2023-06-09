import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

export const generateMerkleProof = (addresses, address) => {
  const leafNodes = addresses.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

  const hashedAddress = keccak256(address);
  const proof = merkleTree.getHexProof(hashedAddress);
  const root = merkleTree.getHexRoot();
  console.log(root)                          

  const valid = merkleTree.verify(proof, hashedAddress, root);

  return {
    valid: valid,
    proof: proof,
  };
};

generateMerkleProof()