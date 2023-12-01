// pages/blog.js
"use client";

import Navbar from '@/app/components/Navbar';
import React from 'react';
// Import other components or libraries as needed

export default function Blog() {
    return (
        <div id='app'>
            <Navbar></Navbar>
            <h1 className='text-blue-500'>Blog Page</h1>
            {/* Other components or content for your blog page */}
        </div>
    );
}
