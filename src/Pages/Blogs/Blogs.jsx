import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <div className="header bg-blue-100 py-14">
                <h1 className='font-bold text-3xl text-[#1A1919] text-center'>Question & Answer</h1>
            </div>
            <div className='my-container my-16'>
                <div className=' border-2 p-8 rounded-xl my-5  shadow-lg '>
                    <h1 className='text-xl font-bold'>When should you use context API?</h1>
                    <br />
                    The Context API can be used when you need to manage global state or share data between components in your React application, such as themes, authentication state, language settings, configurations, or as an alternative to Redux for small-scale applications. However, it's important to carefully consider your application's state management needs and architecture before deciding to use the Context API, as other solutions such as local component state, prop drilling, or Redux might be more appropriate depending on your specific use case.

                    <br />
                </div>

                <div className=' border-2 p-8 rounded-xl my-5 shadow-lg'>
                    <h1 className='text-xl font-bold'>What is a custom hook?</h1>
                    <br />
                    <p><span className='text-lg font-bold'>Custom hook: </span>
                        <br />
                        Using custom hooks can help you abstract and encapsulate complex logic or behavior, making your components more focused and easier to understand. Custom hooks also promote code reuse, reduce duplication, and improve maintainability, making them a powerful tool for building scalable and maintainable React applications.
                    </p>
                </div>

                <div className=' border-2 p-8 rounded-xl my-5 shadow-lg'>
                    <h1 className='text-xl font-bold'>What is useRef?</h1>
                    <br />
                    <p><span className='text-lg font-bold'>useRef:</span>
                        <br />
                        useRef is a powerful hook in React that allows you to create mutable references to DOM elements or store mutable data that persists across renders without triggering re-renders. It is commonly used for accessing and manipulating DOM elements directly, storing mutable data, or managing values that need to be preserved between renders.
                    </p>
                </div>

                <div className=' border-2 p-8 rounded-xl my-5 shadow-lg'>
                    <h1 className='text-xl font-bold'>What is useMemo?</h1>
                    <br />
                    <p><span className='text-lg font-bold'>useMemo:</span>
                        <br />
                        useMemo is a powerful optimization tool in React that allows you to memoize the result of a function call and cache it, preventing unnecessary recalculations or re-renders. It is commonly used for optimizing performance, avoiding unnecessary re-renders, and caching API responses or other asynchronous operations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;