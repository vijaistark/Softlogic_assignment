import { useState } from 'react'
import './App.css'

function ProfileCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>
      {props.children}
    </div>
  );
}

function Button(props) {
  return (
    <button
      style={{
        backgroundColor: props.color,
        padding:
          props.size === "small"
            ? "5px 10px"
            : props.size === "large"
            ? "15px 30px"
            : "10px 20px",
        color: "white"
      }}
    >
      {props.children}
    </button>
  );
}

function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
      <p>{props.footer}</p>
    </div>
  );
}

function App() {
  return (
    <div>

      <ProfileCard name="Vijay" age={25} role="Developer">
        <p>Likes React and JavaScript.</p>
      </ProfileCard>

      <ProfileCard name="Priya" age={22} role="Designer">
        <p>Likes UI design and creativity.</p>
      </ProfileCard>

      <ProfileCard name="Raja" age={24} role="Tester">
        <p>Likes testing and finding bugs.</p>
      </ProfileCard>

      <Button color="blue" size="large">
        Submit
      </Button>

      <Button color="green" size="medium">
        Save
      </Button>

      <Button color="red" size="small">
        Delete
      </Button>

      <Card title="Product" footer="₹999">
        <p>This is a great product.</p>
      </Card>

      <Card title="About" footer="Learn More">
        <p>We build simple and useful applications.</p>
      </Card>

      <Card title="Contact" footer="Contact Us">
        <p>Email: example@gmail.com</p>
      </Card>
    </div>
  );
}

export default App;