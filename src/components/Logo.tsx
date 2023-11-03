import iconicMark from '@/images/iconic-mark.png'
import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<any>) {
  return <Image src={iconicMark} alt="Klaq" {...props} />
}
