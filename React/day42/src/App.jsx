import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submittedUser, setSubmittedUser] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setSubmittedUser(username);
  }
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("React");
  const [accepted, setAccepted] = useState(true);
  const [regName, setRegName] = useState("");
  const [email, setEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [gender, setGender] = useState("");
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    document.title = username
      ? `Hello, ${username}`
      : "Day 42 React Assignment";
  }, [username]);

  function handleRegistration(e) {
    e.preventDefault();
    setRegistered(true);
  }

  return (
    <div>
      <h1>Day 42</h1>

      <hr />
      <h2>Login Form</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>

      {submittedUser && <p>Welcome, {submittedUser}!</p>}

      <hr />
      <h2>Student Details</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <h3>Student Information</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Department: {department}</p>

      <hr />
      <h2>Course Selection</h2>

      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="React">React</option>
        <option value=".NET">.NET</option>
        <option value="Java">Java</option>
      </select>

      <p>Selected Course: {course}</p>

      <hr />
      <h2>Terms and Conditions</h2>

      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        I accept the terms and conditions
      </label>

      <br /><br />

      <button
        disabled={!accepted}
        onClick={() => alert("Form submitted successfully!")}
      >
        Submit
      </button>

      <hr />
      <h2>Registration Form</h2>

      <form onSubmit={handleRegistration}>
        <input
          type="text"
          placeholder="Full Name"
          value={regName}
          onChange={(e) => {
            setRegName(e.target.value);
            setRegistered(false);
          }}
          required
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setRegistered(false);
          }}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password (minimum 6 characters)"
          value={regPassword}
          onChange={(e) => {
            setRegPassword(e.target.value);
            setRegistered(false);
          }}
          minLength={6}
          required
        />

        <br /><br />

        <select
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
            setRegistered(false);
          }}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <br /><br />

        <button type="submit">Register</button>
      </form>

      {registered && (
        <div>
          <h3>Registration Successful!</h3>
          <p>Name: {regName}</p>
          <p>Email: {email}</p>
          <p>Gender: {gender}</p>
        </div>
      )}

      <hr />
      <h2>useEffect Example</h2>

      <p>
        Type a username in Task 1 and watch the browser tab title change.
      </p>
    </div>
  );
}

export default App;
