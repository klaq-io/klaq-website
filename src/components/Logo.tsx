import Image from 'next/image'
import iconicMark from '@/images/klaq-app.png'

export function Logo(props: React.ComponentPropsWithoutRef<any>) {
  return (
    <Image width={256} height={256} src={iconicMark} alt="Klaq" {...props} />
  )
}
