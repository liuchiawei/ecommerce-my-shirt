export default function PageButton({ text }: { text: string }) {
  return (
    <div className='relative w-fit py-4 px-8 relative z-50 font-bold text-xl tracking-widest mx-auto my-8 cursor-pointer after:content-[""] after:bg-foreground after:absolute after:left-0 after:right-full after:top-0 after:z-0 after:h-full after:transition-all after:duration-500 hover:after:right-0 hover:text-background'>
      <h3 className='relative z-50'>{text}</h3>
    </div>
  );
}
