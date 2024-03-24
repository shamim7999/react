import React from "react";
import '../css/Form-Style.css'

export default function MyForm({
  handleSubmit,
  handleChange,
  id,
  title,
  description,
  priority,
  created,
  updated
  }) {

    

    return (
        <>
        <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={title} onChange={handleChange} />
        </div>
    
        <div>
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" id="description" value={description} onChange={handleChange} />
        </div>
    
        <div>
      <label htmlFor="priority">Priority: </label>
      <select name="priority" id="priority" value={priority} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    
        <input type="hidden" name="created" value={created} />
        <input type="hidden" name="updated" value={updated} />
        <input type="hidden" name="id" value={id} />
        {console.log("Created: ", created)}
        <div>
          <button type="submit">Submit</button>
        </div>
    </form>
    
        </>
    );
};
