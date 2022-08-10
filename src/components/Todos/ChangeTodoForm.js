import React from 'react';

const ChangeTodoForm = (props) => {
  return (
    <form>
      <input type="text" defaultValue={props.text}></input>
      <button>change</button>
      <button onClick={props.cancel}>cancel</button>
    </form>
  );
};

export default ChangeTodoForm;
