import axios from "axios";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [spiner, setSpiner] = useState(true);

    useEffect(() => {

        // Using fetch: 
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))


        // Using axios
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            // .then(data => console.log(data.data.data))   aivabe data k nita hobe axios a
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFakeData)
                setPhones(phonesWithFakeData)

                setSpiner(false)
            })
    }, [])
    return (
        <div>
            {spiner &&
                <Audio
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="audio-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                />
            }
            <h1>Phones: {phones.length}</h1>
            <BarChart width={700} height={200} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;