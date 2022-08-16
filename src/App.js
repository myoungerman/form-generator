import logo from './logo.svg';
import './App.css';

function App() {

  // The inputs variable would be passed in via props
  let inputs = [
    {
      el: 'input',
      type: 'text',
      labelName: 'First name: '
      // Additional properties, like className, would also be listed here
    },
    {
      el: 'input',
      type: 'text',
      labelName: 'Last Name: '
    },
    {
      el: 'input',
      type: 'submit',
      buttonName: 'Submit form'
    }
  ]

  let allInputs = inputs.map((obj) => {
    if (obj.el === 'input') {
      return <div>
      <label>{obj.labelName}</label>
      <input type={obj.type} name={obj.name}></input>
      </div>
    } else {
      return <button type={obj.type}>{obj.buttonName}</button>
    }
  });

  return (
    <form>
      {allInputs}
    </form>
    );
}

export default App;
