import SectionTitle from '@/components/ui/sectionTitle'
import PageButton from '@/components/ui/pageButton'

export default function Stores() {
  return (
    <div className='relative w-full max-w-6xl mx-auto flex flex-col justify-center items-center gap-4'>
      <div className='bg-red-500 w-full max-w-[720px] h-[480px]'>
        store background
      </div>
      <PageButton text="店舗一覧" />
      <SectionTitle text="stores" />
    </div>
  )
}


