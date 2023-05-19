import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <div className="header bg-blue-100 py-14">
                <h1 className='font-bold text-3xl text-[#1A1919] text-center'>Question & Answer</h1>
            </div>
            <div className='my-container my-16'>
                <div className=' border-2 p-8 rounded-xl my-5  shadow-lg '>
                    <h1 className='text-xl font-bold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <br />
                    <p className='text-base font-bold'>1. Access Token:</p>
                    
                    An access token is a credential that is obtained by a client application (such as a web or mobile app) after successfully authenticating a user. It is a string of characters that represents the user's authorization to access protected resources or perform specific actions on a server. The token typically contains information such as the user's identity and permissions.

                    <br />
                    <br />
                    <p className='text-base font-bold'>2. Refresh Token:</p>
                    
                    A refresh token is a long-lived credential that is also obtained during the authentication process. Unlike access tokens, refresh tokens are not meant to be included in each request to the server. Instead, they are securely stored on the client-side, typically in a secure storage mechanism provided by the platform or browser, such as a secure HTTP-only cookie or the device's keychain.

                    <br />
                </div>

                <div className=' border-2 p-8 rounded-xl my-5 shadow-lg'>
                    <h1 className='text-xl font-bold'>Compare SQL and NoSQL databases?</h1>
                    <br />
                    <p><span className='text-base font-bold'>1. SQL Databases:: </span>
                        <br />
                        Structure: SQL databases are based on a structured and predefined schema, where data is organized into tables with a fixed number of columns and data types. The relationships between tables are defined through keys (primary and foreign keys).

                        Data Integrity: SQL databases enforce strong data integrity and consistency rules through ACID (Atomicity, Consistency, Isolation, Durability) properties. Transactions ensure that data remains in a consistent state and that all changes are committed or rolled back.
                    </p>
                    <br />
                    <p><span className='text-base font-bold'>2. NoSQL Databases: </span>
                        <br />
                        Flexibility: NoSQL databases provide a flexible and schema-less data model. They allow for storing unstructured or semi-structured data, where the schema can evolve over time without the need for predefined tables and columns.

                        Scalability: NoSQL databases are designed for horizontal scalability, enabling them to handle large amounts of data and high traffic loads. They distribute data across multiple servers and can scale by adding more nodes to the cluster.
                    </p>
                </div>

                <div className=' border-2 p-8 rounded-xl my-5 shadow-lg'>
                    <h1 className='text-xl font-bold'>What is express js? What is Nest JS?</h1>
                    <br />
                    <p><span className='text-lg font-bold'>1. Express.js:</span>
                        <br />
                        Express.js is a popular and widely used web application framework for Node.js. It provides a simple and minimalistic set of features and APIs for building web applications and APIs. Express.js is known for its flexibility, extensibility, and ease of use. It follows the middleware pattern, allowing developers to add modular functions (middlewares) that handle requests and responses.
                    </p>
                    <br />
                    <p><span className='text-lg font-bold'>1. NestJS:</span>
                        <br />
                        NestJS is a modern, progressive, and opinionated framework for building efficient and scalable server-side applications with Node.js. It is built with TypeScript and takes advantage of its strong typing system, decorators, and object-oriented programming principles. NestJS draws inspiration from Angular, borrowing many concepts and patterns from the popular frontend framework.
                    </p>
                </div>

                <div className=' border-2 p-8 rounded-xl my-5 shadow-lg'>
                    <h1 className='text-xl font-bold'>What is MongoDB aggregate and how does it work?</h1>
                    <br />
                    <p><span className='text-lg font-bold'>MongoDB:</span>
                        <br />
                        In MongoDB, the aggregate function is used to perform advanced data aggregation operations on collections. It allows you to process and transform data within MongoDB, performing calculations, grouping, filtering, and other operations to generate aggregated results.

                        The aggregate function in MongoDB follows the aggregation pipeline concept, which consists of a sequence of stages. Each stage takes the output of the previous stage as input and performs specific operations on the data. The output of the last stage is the result of the aggregation.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;