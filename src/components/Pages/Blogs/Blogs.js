import React from "react";
import { Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <Container>
        <h2>1. Differences Between SQL and NoSQL Databases ?</h2>
        <p>
          <span className="fw-bold">Ans: </span> <br />
          SQL- <br />
          1. SQL databases have fixed or static or predefined schema. <br />
          2. SQL databases are vertically scalable. <br />
          3. SQL databases are best suited for complex queries. <br />
          NoSQL- <br />
          1. NoSQL databases have dynamic schema. <br />
          2. NoSQL databases are horizontally scalable. <br />
          3. Javascript is capable enough to add HTML and play with the DOM.
        </p>{" "}
        <br />
        <h2>2. When Should you use nodejs and when should you use mongoDB ?</h2>
        <p>
          <span className="fw-bold">Ans: </span> <br />
          Nodejs- <br />
          Any project needs a programming environment and a runtime library that
          offers you basic programming tools/support and can compile and/or
          interpret your code. Nodejs is such as tool for the Javascript
          programming language .So, if i want to write some kind of stand-alone
          program or server in Javascript, then i can use nodejs for it. <br />{" "}
          <br />
          MongoDB- <br />
          If my application needs the ability to persistently store data in a
          way that you can efficiently query or update it later, then i Use
          MongoDB or any Other Database If my application needs the ability to
          persistently store data in a way that you can efficiently query or
          update it later, then i Use MongoDB or any Other Database
        </p>
        <h2>3. Difference Between Javascript and Nodejs ?</h2>
        <p>
          <span className="fw-bold">Ans: </span> <br />
          Javascript- <br />
          1. It is basically used on the client-side. <br />
          2. Javascript is used in frontend development. <br />
          3. SQL databases are best suited for complex queries. <br />
          NodeJS- <br />
          1. It is mostly used on the server-side. <br />
          2. Nodejs is used in server-side development. <br />
          3. Nodejs does not have capability to add HTML tags. <br />
        </p>
      </Container>
    </div>
  );
};

export default Blogs;
