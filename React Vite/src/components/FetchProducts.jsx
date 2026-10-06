import React from 'react'
import { useEffect } from 'react'

function FetchProducts() {
    useEffect(()=>{
        async function fetchData() {
            try {
                const serverData = await fetch('https://dummyjson.com/products');
                const jsonData = await serverData.json();
                console.log(jsonData);
            } catch (e) {
                console.log("Error is " + e);
            }
        }
        fetchData();
    },[])
    return (
    <div>FetchProducts</div>
)
}
export default FetchProducts