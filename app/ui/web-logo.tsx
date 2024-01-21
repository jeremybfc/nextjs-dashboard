import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none `}>
      <Image
     
        src="/logo.png"
        width={240}
        height={151}
        priority={true}
        quality={100}
        alt="Brattleboro Food Coop"
      />
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      {/* <p className="text-[44px]">Brattleboro Food Coop</p> */}
    </div>
  );
}
