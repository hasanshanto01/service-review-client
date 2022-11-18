import React from 'react';
import { tabTitle } from '../../utils/DynamicRoute';
import login from '../../assets/login.webp';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Blog = () => {

    tabTitle('Blog');

    return (
        <div className='w-4/5 mx-auto'>
            <h2 className='text-center text-lime-600 text-3xl font-semibold mb-10'>Welcome to MyBlog</h2>

            <div className='mx-10'>

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Difference between SQL and NoSQL?
                    </div>
                    <div className="collapse-content">
                        <p>
                            <span>
                                <strong>SQL:</strong> RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases have fixed or static or predefined schema. These databases are not suited for hierarchical data storage. These databases are best suited for complex queries. Vertically Scalable. Follows ACID property.
                                <br />
                                Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.
                            </span>
                            <br /><br />
                            <span>
                                <strong>NoSQL:</strong> Non-relational or distributed database system. They have dynamic schema. These databases are best suited for hierarchical data storage. These databases are not so good for complex queries. Horizontally scalable. Follows CAP(consistency, availability, partition tolerance).
                                <br />
                                Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc.
                            </span>
                        </p>
                    </div>
                </div>
                <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is JWT, and how does it work?
                    </div>
                    <div className="collapse-content">
                        <p>
                            <span>
                                <strong>JWT:</strong> JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                            </span>
                            <br /><br />
                            Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                            User sign-in using username and password or google/facebook.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                            Resource server then verifies the authenticity of the token using the secret salt/ public key.
                        </p>
                    </div>
                </div>
                <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is the difference between javascript and NodeJS?
                    </div>
                    <div className="collapse-content">
                        <p>
                            <span>
                                <strong>JavaScript:</strong> Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                            </span>
                            <br /><br />
                            <span>
                                <strong>Node JS:</strong> NodeJS is a cross-platform and open source Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                            </span>
                        </p>
                    </div>
                </div>
                <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does NodeJS handle multiple requests at the same time?
                    </div>
                    <div className="collapse-content">
                        <p>
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                            <br />
                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.


                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blog;