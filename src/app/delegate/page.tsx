'use client'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import delegateImage from '../../../public/images/delegate-image.svg'
import leftArrow from '../../../public/images/left-arrow.svg'
import delegateIcon from '../../../public/images/delegate-icon.svg'

const Delegate = () => {
  const router = useRouter()
  const params = useSearchParams()
  const delegateId = `${params.get('id')?.substring(0, 6)}-${params
    .get('id')
    ?.substring((params.get('id')?.length || 6) - 6)}`

  return (
    <div className="flex h-[72px]">
      <div
        className="w-[40px] h-[40px] my-auto hover:bg-delegate hover:rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => router.push('/')}
      >
        <Image src={leftArrow} alt="back" className="m-auto" />
      </div>
      <Image src={delegateIcon} alt="delegateIcon" className="mx-[16px]" />
      <div>
        <div className="flex text-inactive">
          <Image src={delegateImage} alt="delegate" className="mr-[4px]" />
          Delegate
        </div>
        <h1 className="text-[32px] text-white">{delegateId}</h1>
      </div>
    </div>
  )
}

export default Delegate
