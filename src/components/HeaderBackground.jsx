import Image from 'next/image'
import clsx from 'clsx'

import backgroundImage from '@/images/df23header.svg'

export function HeaderBackground({ className, position = 'left' }) {
  return (
    <div className={clsx('absolute inset-0 z-0 overflow-hidden', className)}>
      <Image
        className={clsx(
          'absolute top-0 z-0 h-full w-full object-cover',
          position === 'left',
          position === 'right',
        )}
        src={backgroundImage}
        alt=""
        width={2650}
        height={500}
        priority
        unoptimized
      />
    </div>
  )
}
