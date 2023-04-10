import {useState} from 'react';
import { ethers, BigNumber } from 'ethers';
import cubism from './Cubism.json';
import cubeList from "./cubeList.json";
//import { generateMerkleProof } from './merkleProofs';
import { Box, Button, Flex, Image, Link, Spacer} from '@chakra-ui/react';

import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

window.Buffer = window.Buffer || require("buffer").Buffer;

const cubismAddress = "0x6550365a833000CE7fF57c0F18b2D209B47e078A"                         

const MainMint = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);
    const [merkleProof, setMerkleProof] = useState([""]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                cubismAddress,
                cubism.abi,
                signer
            );

            try{
                const leafNodes = cubeList.map(addr => keccak256(addr));
                const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
                const hashedAddress = keccak256(accounts[0]);
                const proof = merkleTree.getHexProof(hashedAddress);
                const root = merkleTree.getHexRoot(); 
                const valid = merkleTree.verify(proof, hashedAddress, root);
                const response = await contract.cubeMint(proof, { value: ethers.utils.parseUnits("0.1","ether")});
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    return (
        <div>
            <Flex justify="right" align="right" width="100%" padding="20px">
            {isConnected ? (
                <div>
                    
                        <Button
                            backgroundColor="#EBEAEA"
                            color="#176FAF"
                            fontFamily="inherit"
                            size="lg"
                            variant="solid"

                         onClick={handleMint}>      Mint      </Button>
                         
                </div>
            ) : (
                <p>Connetion necessary to Mint</p>
            )}
            </Flex>
        </div>
    );
};

export default MainMint;