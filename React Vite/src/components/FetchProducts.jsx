import React from 'react'
import { useState, useEffect } from 'react'

function FetchProducts() {
    const[data,setData]=useState([]);
    useEffect(()=>{
        async function fetchData() {
            try {
                const res = await fetch('https://dummyjson.com/products');
                const jsonData = await res.json();
                //console.log(jsonData);
                setData(jsonData.products);
            } catch (e) {
                console.log("Error is " + e);
            }
            finally {

            }
        }
        fetchData();
    },[])

    function cartData(element) {
    }

    return (
        <div>
            <div>Fetch Products</div>

            <table border="1" cellPadding="10" width='100%' height='100%'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    width="80"
                                />
                            </td>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td>{product.rating}</td>
                            <td><button onClick={cartData}>addToCart</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
)
}
export default FetchProducts