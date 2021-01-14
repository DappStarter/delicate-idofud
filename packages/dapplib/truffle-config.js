require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remember clutch hunt crisp flip gentle'; 
let testAccounts = [
"0xfb8790d7609f83b8fe6d03b5c2d99dcb9cd5efd1b175e6c1be6f75d3902e0ec3",
"0xfc23207b37b33b1f0da932a4d21e10e507e3fcacad63b06a0dbe36d555801612",
"0x22ad4b1ec0e0c9c56456edd0e2607dd2a4f5492802893963806d30474f4df006",
"0x334cb1853528d990142936bbaac939a25245ff882df80897b3a3e33e4b868c38",
"0xa0d0e759c9d08c36ae7accd5492e9320b643259cf29524383719bc3e360ca0aa",
"0xccc605ff05edbeffd8ac57ff0f17228eed4db54ee4dc18380da87e3dcfcd71ff",
"0x2b52fea422687dab54bdefcafbea9a7dc9412aa29a45d70fafbc100afe68b865",
"0x23ac100d3cc86693c6066d91f7e2a6ea31772a641d27fbc205fb1f93c607b493",
"0x1e57c61bc0a0ff9d48fc519f41aa4cbd8f9e75558e3db8ec3b23b6998cf40470",
"0x5c1f4bbbd7f0859e2bb8c6c15403d9b402b370c54abb6fbd1fc59f96541660ea"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
