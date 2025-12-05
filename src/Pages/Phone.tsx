import axios from 'axios'
import { use } from 'react'
import type { phoneListInterface } from '../Typescript/interface'
import { useNavigate } from 'react-router-dom'


const fetchData = async () => {
  const response = await axios.get("https://dummyjson.com/products/category/smartphones")

  return response?.data.products
}

const mainData = fetchData()


const Phone = () => {
  const navigate = useNavigate()


  const phoneList: phoneListInterface[] = use(mainData)

  console.log(phoneList);



  return (
    <>
      <div className='min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-8'>
        <h1 className='text-3xl font-bold text-center text-white mb-10 uppercase'>Smartphones</h1>

        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {phoneList?.map((item, idx) => (
              <div
                key={item.id || idx}
                className='bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300'
              >
                <img
                  src={item?.thumbnail}
                  alt={item.title}
                  className='w-40 h-40 object-contain mb-4'
                />

                <h2 className='text-lg font-semibold text-gray-800 text-center'>{item.title}</h2>
                <p className='text-sm text-gray-500'>Brand: <span className='font-medium text-gray-700'>{item.brand}</span></p>
                <p className='text-gray-700 font-semibold mt-1'>Price: ${item.price}</p>
                <p className='text-yellow-500 font-semibold'>⭐ {item.rating}</p>

                <button onClick={() => navigate(`/phone/${item.id}`)} className='mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition'>
                  View More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default Phone