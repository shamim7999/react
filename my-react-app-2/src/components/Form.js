import React from "react";

export default function MyForm({email,
  name,
  handleChange,
  handleSubmit,
  password}) {

    

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" id="name" value={name} onChange={handleChange} />
    </div>

    <div>
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email" value={email} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" value={password} onChange={handleChange} />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
        </>
    );
};
