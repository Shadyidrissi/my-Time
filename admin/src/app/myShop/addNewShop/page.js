import React from 'react'

function page() {
    return (
        <div id='home'>
            <h2 style={{ width: "280px", display: "flex" }} id="title">
                <a href='/myShop'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </a>
                My Shoping
            </h2>
            <div id='content-new-shop'>
                <li>
                    <img src="" alt="" />
                </li>
                <li>
                    <label>Image</label>
                    <input type="text" placeholder='https://' />
                </li>
                <li>
                    <label>Title</label>
                    <input type="text" placeholder='Name of product' />
                </li>
                <li>
                    <label>Price</label>
                    <input type="text" placeholder='Price of it' />
                </li>
                <li>
                    <button>Save</button>
                </li>
            </div>
        </div>
    )
}

export default page