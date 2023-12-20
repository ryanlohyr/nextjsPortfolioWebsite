"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import BlogContent from './components/blog-content';
// Import other components or libraries as needed

export default function Blog() {
    return (
        <div >
            <Navbar type="blog"></Navbar>
            <BlogContent></BlogContent>           
        </div>
    );
}
