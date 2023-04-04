import React, { useEffect, useState } from 'react';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <p className='text-xl font-bold ml-10 my-5 text-red-600'>Total product:{products?.length}</p>
            <div className="overflow-x-auto">
                <table className="table w-ful">
                    <thead className='text-red-800'>
                        <tr className='bg-red-800'>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Brands</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Remove</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((p, i) => <tr>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src={p?.img} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{p?.name}</td>
                                <td>{p?.category}</td>
                                <td>{p?.seller}</td>
                                <td className='font-semibold text-red-500'>{p.status === true ? "Available" : "Stock Out"}</td>
                                <td className='font-semibold text'>{p?.price} Tk.</td>
                                <td><button className="btn btn-sm btn-success">Edit</button>
                                </td>
                                <td><button onClick={() => handleDelete(p?._id)} className="btn btn-sm btn-warning">Remove</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;