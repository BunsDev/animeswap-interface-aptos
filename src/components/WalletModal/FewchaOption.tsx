import FEWCHA_ICON_URL from 'assets/fewcha.svg'
import { ConnectFewcha, useAccount, useWallet } from 'state/wallets/hooks'
import { getWalletName, WalletType } from 'state/wallets/types'

import Option from './Option'

const BASE_PROPS = {
  color: '#6748FF',
  icon: FEWCHA_ICON_URL,
  id: 'fewcha',
}

export default function FewchaOption() {
  const account = useAccount()
  const walletType = useWallet()
  const isActive = walletType === WalletType.FEWCHA && account !== undefined
  return (
    <Option
      {...BASE_PROPS}
      isActive={isActive}
      onClick={async () => {
        if ('fewcha' in window) {
          await ConnectFewcha()
        } else {
          window.open('https://fewcha.app/', '_blank')
        }
      }}
      header={getWalletName(WalletType.FEWCHA)}
    />
  )
}
