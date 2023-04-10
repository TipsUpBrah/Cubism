import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer} from '@chakra-ui/react';

const NavBar = ({accounts, setAccounts}) =>{
    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return(
            <Flex justify="right" align="right" width="100%" padding="20px">
            {isConnected?(
                <Box margin="0 5px">Connected</Box>
            ) : (
                <Button 
                    backgroundColor="#EBEAEA"
                    color="#176FAF"
                    fontFamily="inherit"
                    size="lg"
                    variant="solid"
                    onClick={connectAccount}>Connect
                </Button>
            )}
            </Flex>
    );
};

export default NavBar;