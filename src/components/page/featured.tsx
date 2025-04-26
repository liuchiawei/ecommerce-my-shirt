import SectionTitle from '@/components/ui/sectionTitle'

export default function Featured() {
  return (
    <div className='relative w-full max-w-6xl mx-auto flex flex-col md:flex-row'>
      <SectionTitle text="featured" />
      <div className='w-full h-120'>Article 1</div>
      <div className='w-full h-120'>Article 2</div>
    </div>
  )
}


