import Image from 'next/image'
import clsx from 'clsx'

import backgroundImage from '@/images/df23header.svg'

export function HeaderBackground({ className, position = 'left' }) {
  return (
    <div
      className={clsx(
        'absolute inset-0 overflow-hidden',
        className,
      )}
    >
      <Image
        className={clsx(
          'absolute top-0 object-cover w-full h-full z-0',
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
      {/* <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" /> */}
    </div>
  )
}
