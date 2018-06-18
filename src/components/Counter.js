import React, {PropsTypes} from 'react';

const Counter = props =>{
    return (
      <div className="counter" >
        <button className="counter-action decrement" onClick={() => props.onChange(-1)}>
          -
        </button>
        <div className="counter-score"> {props.score} </div>
        <button className="counter-action increment" onClick={() => props.onChange(1)}>
          +
        </button>
      </div>
    );
   }
   
   Counter.propTypes = {
     onChange: React.PropTypes.func.isRequired,
     score: React.PropTypes.number.isRequired,
   };
   
   const AddPlayerForm = React.createClass({
     propTypes: {
       onAdd: React.PropTypes.func.isRequired,
     },
   
     getInitialState: function () {
       return { name: '' };
     },
   
     onNameChange: function (e) {
       const name = e.target.value;
       this.setState({ name: name });
     },
   
     onSubmit: function (e) {
       if (e) e.preventDefault();
       this.props.onAdd(this.state.name);
       this.setState({ name: '' });
     },
   
     render: function () {
       return (
         <div className="add-player-form">
           <form onSubmit={this.onSubmit}>
             <input
               type="text"
               value={this.state.name}
               onChange={this.onNameChange}
               placeholder="Player Name"
             />
             <input type="submit" value="Add Player" />
           </form>
         </div>
       );
     }
   });

   export default Counter;