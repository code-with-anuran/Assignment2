import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { phoneListInterface } from '../Typescript/interface';
import axios from 'axios';

const PhoneDetails = () => {

    const { id } = useParams()
    // const params -useParams()
    console.log("this is name", id);

    const [phoneDatas, setphoneDatas] = useState<phoneListInterface | null>(null)

    const phoneData = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`)
            // console.log("response", response);

            setphoneDatas(response?.data)
        } catch (error) {
            console.log(error);
        }
    }
    phoneData()

    useEffect(() => {
        phoneData()
    }, [id])

    console.log("this is data", phoneDatas);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 flex flex-col items-center">
                <div className="max-w-lg bg-white text-gray-800 rounded-2xl shadow-lg p-6">
                    <img
                        src={phoneDatas?.images?.[0] ?? ""}
                        alt={phoneDatas?.title}
                        className="w-full h-64 object-contain rounded-xl mb-6"
                    />

                    <h1 className="text-2xl font-bold mb-2">{phoneDatas?.title}</h1>
                    <p className="text-gray-600 mb-2">{phoneDatas?.description}</p>
                    <p className="font-semibold text-gray-700 mb-1">
                        Brand: {phoneDatas?.brand}
                    </p>
                    <p className="font-semibold text-gray-700 mb-1">
                        Price: ${phoneDatas?.price}
                    </p>
                    {/* <p className="font-semibold text-yellow-500 mb-4">
                        ⭐ {phoneDetails.rating}
                    </p> */}

                    {/* <button
                        onClick={() => Navigate(-1)}
                        className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:opacity-90 transition"
                    >
                        ⬅ Back to List
                    </button> */}
                </div>
            </div>
        </>
    )
}

export default PhoneDetails
