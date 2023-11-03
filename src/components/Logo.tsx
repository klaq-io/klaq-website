import Image from 'next/image'
import iconicMark from '@/images/iconic-mark.png'

export function Logo(props: React.ComponentPropsWithoutRef<any>) {
  return <Image width={500} src={iconicMark} alt="Klaq" {...props} />
}
