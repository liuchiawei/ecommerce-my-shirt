import { Carousel } from "../ui/carousel"

export default function Hero() {
  return (
    <Carousel
        items={[
          <div className="h-screen bg-blue-500">第一張幻燈片</div>,
          <div className="h-screen bg-red-500">第二張幻燈片</div>,
          <div className="h-screen bg-green-500">第三張幻燈片</div>,
        ]}
        className="w-full mx-auto h-full"
     />
  )
}


