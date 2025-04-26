export default function Footer() {
  return (
    <footer className='flex justify-between w-full h-full py-10 px-6 md:px-10 bg-red-500'>
      <div className='w-full md:w-[45%]'>
        <div>logo</div>
        <p className='text-sm'>©2025 Liu<br /> All rights reserved.</p>
      </div>
      <ul className='w-full flex flex-col md:flex-row justify-between gap-4 px-8 *:[&_a]:font-bold'>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">online shop</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </footer>
  )
}
