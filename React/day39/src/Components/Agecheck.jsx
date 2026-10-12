const AgeCheck = () => {
  let age = 22
  let message

  if (age >= 18) {
    message = "Eligible to Vote"
  } else {
    message = "Not Eligible to Vote"
  }

  return <h2>{message}</h2>
}

export default AgeCheck
