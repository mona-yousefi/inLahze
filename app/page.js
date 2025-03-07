import Carousel from "./components/Carousel/carousel";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <div className="flex justify-center mt-10">
      <Image src="/spiritual-retreat-with-man-meditating_23-2149325117.jpg" width={1200} height={400} layout="responsive"/>
    </div>
      <div className="flex flex-col items-center bg-gray-100 mt-11 px-2">
        <p className="text-3xl">دسترسی سریع</p>
        <Carousel/>
      </div>
    </div>
  );
}
