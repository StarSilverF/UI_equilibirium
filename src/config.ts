import { Configuration } from './bomb-finance/config';
import { BankInfo } from './bomb-finance';

const configurations: { [env: string]: Configuration } = {
  // development: {
  //   chainId: 97,
  //   networkName: 'BSC Testnet',
  //   ftmscanUrl: 'https://testnet.bscscan.com/',
  //   defaultProvider: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  //   deployments: require('./bomb-finance/deployments/deployments.testing.json'),
  //   externalTokens: {
  //     WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
  //     FUSDT: ['0x55d398326f99059fF775485246999027B3197955', 18], // This is actually BUSD on mainnet not fusdt
  //     BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
  //     ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
  //     SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
  //     'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
  //     'BOMB-BTCB-LP': ['0x2A651563C9d3Af67aE0388a5c8F89b867038089e', 18],
  //     'BSHARE-BNB-LP': ['0x1303246855b5B5EbC71F049Fdb607494e97218f8', 18],
  //   },
  //   baseLaunchDate: new Date('2021-11-21 1:00:00Z'),
  //   bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
  //   boardroomLaunchesAt: new Date('2020-12-11T00:00:00Z'),
  //   refreshInterval: 10000,
  // },
  development: {
    chainId: 56,
    networkName: 'BSC Mainnet',
    ftmscanUrl: 'https://bscscan.com',
    defaultProvider: 'https://bsc-dataseed.binance.org/',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
      SBTC: ['0x1d28cd41fc594232D05F2AbdAFBb556E7F78Dc2a', 18],
      SUSD: ['0x12017c89444624C0268A1053467e22954F4fd362', 18],
      SVL: ['0x37F14E7c2FadC2A01dBD93b8a1F69D41c6c3d554', 18],
      CAKE: ['0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', 18],
      ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
      BUSD: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18],
      BUSM: ['0x6216B17f696B14701E17BCB24Ec14430261Be94A', 18],
      BOMB: ['0x522348779DCb2911539e76A1042aA922F9C47Ee3', 18],
      BRRRR: ['0x522348779DCb2911539e76A1042aA922F9C47Ee3', 18],
      '80BOMB-20BTCB-LP': ['0xd6F52e8AB206e59A1E13b3D6c5B7f31E90ef46EF', 18],
      '80BSHARE-20WBNB-LP': ['0x2C374eD1575e5C2C02c569f627299E902A1972cb', 18],
      'BBOMB-BOMB': ['0xcB72214d09a1804E4eecA9C3F3bB6ca49460237b', 18],
      'BBOMB-BTCB': ['0x23EFC2ff90e3423c3F84352b21b49FBcD4C3E32D', 18],
      SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
      'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
      'BUSM-BUSD-LP': ['0xEe46Bd06a8876c3cc86027dc7D2Df19af513cD12', 18],
      'USDT-BTCB-LP': ['0x3f803ec2b816ea7f06ec76aa2b6f2532f9892d62', 18],
      'BOMB-BTCB-LP': ['0x84392649eb0bC1c1532F2180E58Bae4E1dAbd8D6', 18],
      'BOMB-BSHARE-LP': ['0x54f9fE531224Fa43Feb218B20ABa84d22a8fDc0C', 18],
      'BOMB-BNB-LP': ['0x107CDC0c46615C63EE4abC4E1e264D3BD12390e6', 18],
      'BSHARE-BNB-LP': ['0x1303246855b5B5EbC71F049Fdb607494e97218f8', 18],
      'BSHARE-BNB-APELP': ['0x0dE2a71b2f43CF588A00422d41E1C02D0E08D552', 18],
      'BOMB-BTCB-APELP': ['0xB6E85031F313563bF12ea414118978C8BD78db5D', 18],
      'BRRRR-BNB-LP': ['0xE38BCa89D364A46f9af47529d53b5ae6A92e6d46', 18],
    },
    baseLaunchDate: new Date('2021-11-20 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-11-20T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: 56,
    networkName: 'BSC Mainnet',
    ftmscanUrl: 'https://bscscan.com',
    defaultProvider: 'https://bsc-dataseed.binance.org/',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
      SBTC: ['0x1d28cd41fc594232D05F2AbdAFBb556E7F78Dc2a', 18],
      'BBOMB-BOMB': ['0xcB72214d09a1804E4eecA9C3F3bB6ca49460237b', 18],
      'BBOMB-BTCB': ['0x23EFC2ff90e3423c3F84352b21b49FBcD4C3E32D', 18],
      SVL: ['0x37F14E7c2FadC2A01dBD93b8a1F69D41c6c3d554', 18],
      BUSM: ['0x6216B17f696B14701E17BCB24Ec14430261Be94A', 18],
      BUSD: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18],
      SUSD: ['0x12017c89444624C0268A1053467e22954F4fd362', 18],
      CAKE: ['0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', 18],
      ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
      SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
      BOMB: ['0x522348779DCb2911539e76A1042aA922F9C47Ee3', 18],
      BRRRR: ['0x522348779DCb2911539e76A1042aA922F9C47Ee3', 18],
      '80BOMB-20BTCB-LP': ['0xd6F52e8AB206e59A1E13b3D6c5B7f31E90ef46EF', 18],
      '80BSHARE-20WBNB-LP': ['0x2C374eD1575e5C2C02c569f627299E902A1972cb', 18],
      'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
      'USDT-BTCB-LP': ['0x3f803ec2b816ea7f06ec76aa2b6f2532f9892d62', 18],
      'BOMB-BTCB-LP': ['0x84392649eb0bC1c1532F2180E58Bae4E1dAbd8D6', 18],
      'BUSM-BUSD-LP': ['0xEe46Bd06a8876c3cc86027dc7D2Df19af513cD12', 18],
      'BOMB-BSHARE-LP': ['0x54f9fE531224Fa43Feb218B20ABa84d22a8fDc0C', 18],
      'BOMB-BNB-LP': ['0x107CDC0c46615C63EE4abC4E1e264D3BD12390e6', 18],
      'BSHARE-BNB-LP': ['0x1303246855b5B5EbC71F049Fdb607494e97218f8', 18],
      'BSHARE-BNB-APELP': ['0x0dE2a71b2f43CF588A00422d41E1C02D0E08D552', 18],
      'BOMB-BTCB-APELP': ['0xB6E85031F313563bF12ea414118978C8BD78db5D', 18],
      'BRRRR-BNB-LP': ['0xE38BCa89D364A46f9af47529d53b5ae6A92e6d46', 18],
    },
    baseLaunchDate: new Date('2021-11-20 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-11-20T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding BOMB
        - 2 = LP asset staking rewarding BSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
   BombWBNBGenesisRewardPool: {
     name: 'Earn BRRRR by WBNB',
     poolId: 0,
     sectionInUI: 0,
     contract: 'BombWBNBGenesisRewardPool',
     depositTokenName: 'WBNB',
     earnTokenName: 'BRRRR',
     finished: false,
     sort: 2,
     closedForStaking: false,
   },
  BombLPGenesisRewardPool: {
    name: 'Earn BRRRR by BRRR-BNB-LP',
    poolId: 0,
    sectionInUI: 0,
    contract: 'BombLPGenesisRewardPool',
    depositTokenName: 'BRRRR-BNB-LP',
    earnTokenName: 'BRRRR',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },
  BombBUSDGenesisRewardPool: {
    name: 'Earn BRRRR by BUSD',
    poolId: 0,
    sectionInUI: 0,
    contract: 'BombBUSDGenesisRewardPool',
    depositTokenName: 'BUSD',
    earnTokenName: 'BRRRR',
    finished: false,
    sort: 3,
    closedForStaking: false,
  },


};

export default configurations[process.env.NODE_ENV || 'development'];
