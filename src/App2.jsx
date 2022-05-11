// import { Component } from 'react';
// import './App.css';

// class Radio extends Component {
//   constructor() {
//     super();
//     this.state = {
//       volume: 0
//     }
//   }
//   componentDidMount() {
//   }
//   componentDidUpdate() {

//   }
//   onIncrease = () => {
//     this.setState({volume: this.state.volume + 1})
//   }
//   onDecrease = () => {
//     this.setState({volume: this.state.volume - 1})
//   }
//   render() {
//     return(
//       <div>
//         <button onClick={this.onIncrease}>Increase</button>
//         <button onClick={this.onDecrease}>Decrease</button>
//         <div>
//         Volume: {this.state.volume}
//       </div>
//       </div>
//     )
//   }
//   shouldComponentUpdate(nextrProps, nextState) {
//     if (nextState.volume >= 300) {
//       return false;
//     }
//     return true
//   }
//   static getDerivedStateFromProps(props, state) {
//     if( props.seed && state.seed !== props.seed)
//     return {
//       see: props.seed,
//       volume: state.volume
//     };
//   }
// }

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       seed: 100
//     }
//   }
//   seedGenerator = () => {
//     this.setState({seed: Math.parseInt(Math.random() * 100)})
//   }
//   render() {
//     return(
//       <div className='App'>
//         <div>
//           <button onClick={this.seedGenerator}>Generate seed</button>
//         </div>
//         <Radio />
//       </div>
//     )
//   }
  
  
// }
