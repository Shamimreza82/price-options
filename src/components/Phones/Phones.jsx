import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([])
    useEffect (() => {
        // fetch ('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then (res => res.json())
        // .then (data => setPhones(data.data))
        axios.get ('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then (data => {
            const fakedata = data.data.data; 
            const fakedatamap = fakedata.map(data => {
                const obj = {
                    name: data.phone_name, 
                    price: parseInt(data.slug.split('-')[1])
                }
                return obj; 
            })
             setPhones (fakedatamap)
        })

    }, [])


    return (
        <div>
            <h2> Phones: {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" ></XAxis>
                <YAxis dataKey="price"></YAxis>
            </BarChart>
        </div>
    );
};

export default Phones;