import { notFound } from 'next/navigation';
import { mockProducts } from '../../MockData/mock';
import Button from '@/app/components/Button/button';
import Image from 'next/image';

export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetail({ params }) {
  const product = mockProducts.find(p => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }
  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8 mt-20">
        <div className="bg-gray-100 p-8 rounded-lg">
          <Image src={product.image} width={1000} height={1000} className="justify-self-start"></Image>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl mb-4">{product.price} تومان</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <Button product={product} image={product.image} title={product.title} price={product.price} description={product.description}/>
        </div>
      </div>
    </div>
  );
}