import React from "react";
import blogs from "../components/blogs.json";

const BlogContent = () => {
	return (
		<div className="mt-[55px] flex flex-col justify-center h-[300px] items-center">
			<div className="w-full flex justify-center">
				{blogs.map(blog => {
					return (
						<div
							onClick={() => {}}
							key={blog.title}
							className="border hover:rounded-[8px] border-transparent dark:hover:border-gray-300 hover:border-gray-900 transition-all duration-300 w-[85%]  sm:w-4/5 md:w-3/5 flex justify-center text-start flex-col"
						>
							<a className="p-4" href={"blog/" + blog.href}>
								<h1 className="text-[30px] mb-[1px]">{blog.title}</h1>
								<p className="dark:text-gray-200 text-gray-600">{blog.description}</p>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BlogContent;
