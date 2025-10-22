
import './TopProduct.css';

export default function TopProduct() {
  const products = [
    {
      id: 1,
      name: 'Mahsulot 1',
      image: 'img/pichoq.png',
      price: '100 000 UZS',
      desc: 'Temirchilik'
    },
    {
      id: 2,
      name: 'Mahsulot 1',
      image: 'img/sirga.png',
      price: '100 000 UZS',
      desc: 'Zargarlik'
    },
    {
      id: 3,
      name: 'Mahsulot 1',
      image: 'img/tovoq.png',
      price: '100 000 UZS',
      desc: 'Kulolchilik'
    },
    {
      id: 4,
      name: 'Mahsulot 1',
      image: 'img/lavh.png',
      price: '100 000 UZS',
      desc: 'Yog‘och o‘ymakorligi'
    },
  ]

  return (
    <section className="">
        <div className='container top-products-container'>
             {/* Title */}
      <div className="mb-4">
        <h2 className="text-3xl font-semibold">Eng ko'p xarid qilingan mahsulotlar</h2>
        <p className="mt-2 text-gray-600">Odamlar eng ko'p sotib olgan va tavsiya qilingan mahsulotlar</p>
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg hover:shadow-lg transition-shadow duration-300 text-left">
            <div className="text-sm">{product.price}</div>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" width="200" height="150" />
            <p className="text-gray-700 mb-2">{product.desc}</p>
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          </div>
        ))}
        </div>
      
        </div>
    </section>
  );
}
