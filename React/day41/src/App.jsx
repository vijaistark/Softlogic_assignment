import { useState } from 'react'
import './App.css'

function App() {

  // 1
  const [name1, setName1] = useState("");
  const [result1, setResult1] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    setResult1(name1);
  }

// 2
  const [name2, setName2] = useState("");
  const [result2, setResult2] = useState("");

  function showname() {
    setResult2(name2);
  }

// 3
  const [num, setNum] = useState("");

  function shownumber(n) {
    setNum(n);
  }

// 4
  const [msg, setMsg] = useState("");
  const [text, setText] = useState("");

// 5
  const [name3, setName3] = useState("");
  const [result3, setResult3] = useState("");


// 6
  const [empid, setEmpid] = useState("");
  const [empname, setEmpname] = useState("");
  const [salary, setSalary] = useState("");
  const [desg, setDesg] = useState("");
  const [deptno, setDeptno] = useState("");


  const [product, setProduct] = useState({
    name: "Laptop",
    price: 50000,
    quantity: 2
  });

  function changeproduct() {
    setProduct({
      ...product,
      name: "Mobile",
      price: 20000,
      quantity: 5
    });
  }


  const [customers, setCustomers] = useState([
    "Raja",
    "Kumar",
    "Priya"
  ]);

  const [customername, setCustomername] = useState("");

  function addcustomer() {
    if (customername.trim() === "") return;

    setCustomers([...customers, customername.trim()]);
    setCustomername("");
  }

  function deletecustomer(index) {
    setCustomers(
      customers.filter((customer, i) => i !== index)
    );
  }


  return (
    <div>
      <h2>1</h2>

      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <p>Name: {result1}</p>


      <h2>2</h2>

      <input
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />

      <button onClick={showname}>Show Name</button>

      <p>Name: {result2}</p>


      <h2>3</h2>

      <button onClick={() => shownumber(10)}>10</button>
      <button onClick={() => shownumber(20)}>20</button>
      <button onClick={() => shownumber(30)}>30</button>

      <p>Number: {num}</p>


      <h2>4</h2>

      <button onClick={() => setMsg("Button clicked")}>
        Click Me
      </button>

      <h3 onMouseOver={() => setMsg("Mouse over heading")}>
        Move Mouse Here
      </h3>

      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setMsg("Input changed");
        }}
      />

      <p>Text: {text}</p>
      <p>Message: {msg}</p>


      <h2>5</h2>

      <input
        type="text"
        value={name3}
        onChange={(e) => setName3(e.target.value)}
        onBlur={() => setResult3(name3)}
      />

      <p>Name: {result3}</p>


      <h2>6</h2>

      <input
        value={empid}
        onChange={(e) => setEmpid(e.target.value)}
      />

      <input
        value={empname}
        onChange={(e) => setEmpname(e.target.value)}
      />

      <input
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <input
        value={desg}
        onChange={(e) => setDesg(e.target.value)}
      />

      <input
        value={deptno}
        onChange={(e) => setDeptno(e.target.value)}
      />

      <h3>Employee Information</h3>

      <p>Employee ID: {empid}</p>
      <p>Employee Name: {empname}</p>
      <p>Salary: {salary}</p>
      <p>Designation: {desg}</p>
      <p>Department Number: {deptno}</p>

      <hr />

      <h2>7</h2>

      <p>Product Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>

      <button onClick={changeproduct}>Change Product</button>


      <h2>8</h2>

      <input
        value={customername}
        onChange={(e) => setCustomername(e.target.value)}
      />

      <button onClick={addcustomer}>Add Customer</button>

      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            {customer}
            <button onClick={() => deletecustomer(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;