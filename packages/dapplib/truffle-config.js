require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stomach rice noble social heavy private equal giant'; 
let testAccounts = [
"0x68881347150595c24fd40ce47d776037f05cef509edb5b7a450eec2b80863086",
"0x4528c780a1886b73318562e74251278fd96864af11ab09ce420082568093058c",
"0x8066e0a015443b222c54e340783953425b598b20e1cf9d70a176e8adb43e9a26",
"0x2480c45a8d916b3b97a178d292c5c39250d3fdb50ea43d862d9972e86a087738",
"0x1bf0d9f6765287dc05a50996f7ab649efb00abcce1c007cd9804e8853e32cb6a",
"0x1107f3cad16d52f119b9f6e42b55f10c609470544c3b0ad6cfc0c07ad2719d2e",
"0xe3c3b29be7b8bc48f12b8ab70be65e088f63cec3b45504ae30c623cb4a4aa5be",
"0x8e5f23c8893b863bfb905c51834838c8960c6d796f3aa858c458313df1f3a4eb",
"0xabb955855beff6072c63f62874f4c8cebaca88d786f4f3e0729c3e4096243c38",
"0x1cd09aa9a5c2b313df83fc80e91a8dd22ca227208aaffbc48b6b710c48dcb0b4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

