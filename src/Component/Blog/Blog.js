import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className="img-container">
                <img className='photo' src="https://i.postimg.cc/BbjYk4HW/alfons-morales-YLSwj-Sy7stw-unsplash.jpg" alt="" />
                <div className='centered text-white'>
                    Read to know
                </div>
            </div>

            <div className="card">
                <div className="row g-2 my-4">
                    <div className="col-md-4">
                        <img src="https://i.postimg.cc/d1CP2f4K/download.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Difference between javascript and nodejs</h5>
                            <p className="card-text">Javascript is a scripting language. It is used to write scripts on the websites. It can only be run in the browsers. On other hand nodejs is javascript runtime environment. It is used to run javascript outside the browser.It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-2 my-4">
                    <div className="col-md-4">
                        <img src="https://i.postimg.cc/RVJjHypC/sql.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Differences between sql and nosql databases.</h5>
                            <p className="card-text">SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
                                SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries.A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-2 mb-5">
                    <div className="col-md-4">
                        <img src="https://i.postimg.cc/44Q1F5Kv/jwt.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">What is the purpose of jwt and how does it work.</h5>
                            <p className="card-text">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blog;