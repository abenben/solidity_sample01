
# インストール（MacOs）

## npm
## node
## truffle
## granche
## vscode

# インストール（Windows）

## npm
## node
## truffle
## granche
## vscode

# インストール（Docker）


# ローカル環境での開発

local machine truffle & Ganashe

## Ganacheの起動

```shell
$ open /Applications/Ganache.app
$ # 対象のワークスペースを選択
```

## コンパイル

```shell
$ truffle compile
```

## デプロイ

```shell
$ truffle deploy
```

## マイグレーション

```shell
$ truffle migrate
```

## command : 標準的なコマンド

アカウント操作

```shell
$ # アカウントの一覧取得
$ truffle console
> web3.eth.getAccounts()
  '0x-----------------'
  '0x-----------------'
            :
  '0x-----------------'
> # 秘密鍵と公開鍵のペアを作成(ノードに保存はされない)
> web3.eth.accounts.create()
> # 終了コマンド
> .exit
```

## command : SampleCode.sol

「サンプルコード」インスタンスの制御

```shell
$ let sample = await SampleCode.deployed()
undefined
$ sample.set(100)
{
  tx: '0xa3c3e50ece3582c18704d05445d51ac9973e60ead557fb6e9bf644a5ac2a4583',
  receipt: {
    transactionHash: '0xa3c3e50ece3582c18704d05445d51ac9973e60ead557fb6e9bf644a5ac2a4583',
    transactionIndex: 0,
    blockHash: '0x9f213879eaaebc2bdf0cb157aac97e10689c23e7d7f4ad4ba15dad5f6c39382d',
    blockNumber: 35,
    from: '0x8589b5cfaf36261b828833ba65900363a1e33c7e',
    to: '0x53a3e0c308318d5e8ebc4aed01b41f1c4399fe63',
    gasUsed: 41602,
    cumulativeGasUsed: 41602,
    contractAddress: null,
    logs: [],
    status: true,
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    rawLogs: []
  },
  logs: []
}
$ sample.get()
BN {
  negative: 0,
  words: [ 100, <1 empty item> ],
  length: 1,
  red: null
}
```


## command : 1_Storage.sol

「ストレージ」インスタンスの制御

```shell
$ let storage = await Storage.deployed()
$ storage.store(300)
$ storage.retrieve()
```

## command : 2_Owner.sol

「オーナー」インスタンスの制御

```shell
$ web3.eth.getAccounts()
[
  '0x8589b5Cfaf36261b828833BA65900363A1e33C7e',
  '0x23691C6F51AF7904E11117942787f2D7C540Ba2b',
  　　　　　　　　:
  '0x883b2726dA18226f428cE097Ea0327e4b5947E4A'
]

$ web3.eth.defaultAccount= '0x8589b5Cfaf36261b828833BA65900363A1e33C7e'
$ let owner = await Owner.deployed()
$ owner.getOwner()
$ owner.changeOwner('0x23691C6F51AF7904E11117942787f2D7C540Ba2b')
```

## command : 3_Ballot.sol

「投票」インスタンスの制御

```shell
$ web3.eth.getAccounts()
[
  '0x8589b5Cfaf36261b828833BA65900363A1e33C7e',
  '0x23691C6F51AF7904E11117942787f2D7C540Ba2b',
  　　　　　　　　:
  '0x883b2726dA18226f428cE097Ea0327e4b5947E4A'
]

$ web3.eth.defaultAccount= '0x8589b5Cfaf36261b828833BA65900363A1e33C7e'
$ let ballot = await Ballot.deployed()
$ ballot.proposals.length
$ ballot.giveRightToVote
$ ballot.vote
$ ballot.winningProposal
$ ballot.winnerName
$ ballot.delegate
```