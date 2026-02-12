import Image from 'next/image';

import CoinIcon from '../icons/coin.svg';
import GiftBagIcon from '../icons/gift-bag.svg';
import LanternIcon from '../icons/lantern.svg';
import Lantern1Icon from '../icons/lantern_1.svg';

export default function Items() {
  return (
    <div className="pointer-events-none relative select-none">
      <Image
        src={LanternIcon}
        alt="Lantern"
        width={100}
        height={100}
        className="absolute left-10 -top-12 origin-top animate-sway object-cover motion-reduce:animate-none [animation-delay:120ms]"
      />
      <Image
        src={Lantern1Icon}
        alt="Lantern 1"
        width={100}
        height={100}
        className="absolute right-10 -top-12 origin-top animate-sway object-cover motion-reduce:animate-none [animation-delay:520ms]"
      />
      <Image
        src={GiftBagIcon}
        alt="Gift Bag"
        width={60}
        height={60}
        className="absolute right-40 top-50 animate-floaty object-cover motion-reduce:animate-none [animation-delay:240ms] [animation-duration:3.6s]"
      />
      <Image
        src={GiftBagIcon}
        alt="Gift Bag"
        width={70}
        height={70}
        className="absolute left-20 top-65 animate-floaty object-cover motion-reduce:animate-none [animation-delay:700ms] [animation-duration:4.1s]"
      />
      <Image
        src={CoinIcon}
        alt="Coin"
        width={50}
        height={50}
        className="absolute left-40 top-50 animate-floaty object-cover motion-reduce:animate-none [animation-delay:80ms] [animation-duration:2.9s]"
      />
      <Image
        src={CoinIcon}
        alt="Coin"
        width={40}
        height={40}
        className="absolute left-20 top-30 animate-floaty object-cover motion-reduce:animate-none [animation-delay:380ms] [animation-duration:3.3s]"
      />
      <Image
        src={CoinIcon}
        alt="Coin"
        width={50}
        height={50}
        className="absolute left-75 top-55 animate-floaty object-cover motion-reduce:animate-none [animation-delay:930ms] [animation-duration:3.7s]"
      />
      <Image
        src={CoinIcon}
        alt="Coin"
        width={50}
        height={50}
        className="absolute right-45 top-10 animate-floaty object-cover motion-reduce:animate-none [animation-delay:160ms] [animation-duration:3.1s]"
      />
      <Image
        src={CoinIcon}
        alt="Coin"
        width={50}
        height={50}
        className="absolute right-75 top-50 animate-floaty object-cover motion-reduce:animate-none [animation-delay:610ms] [animation-duration:3.9s]"
      />
      <Image
        src={CoinIcon}
        alt="Coin"
        width={30}
        height={30}
        className="absolute left-50 top-10 animate-floaty object-cover motion-reduce:animate-none [animation-delay:420ms] [animation-duration:2.7s]"
      />
      <Image
        src={CoinIcon}
        alt="Coin"
        width={50}
        height={50}
        className="absolute bottom-10 right-20 animate-floaty object-cover motion-reduce:animate-none [animation-delay:860ms] [animation-duration:3.5s]"
      />
    </div>
  );
}
