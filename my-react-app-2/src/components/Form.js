import React from "react";

export default function MyForm({
  handleSubmit,
  handleChange,
  firstName,
  lastName,
  userName
  }) {

    

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="firstName">First Name: </label>
      <input type="text" name="firstName" id="firstName" value={firstName} onChange={handleChange} />
    </div>

    <div>
      <label htmlFor="lastName">Last Name: </label>
      <input type="text" name="lastName" id="lastName" value={lastName} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="userName">User Name: </label>
      <input type="text" name="userName" id="userName" value={userName} onChange={handleChange} />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
        </>
    );
};
