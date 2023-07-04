//  import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './form.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
//
// class MyForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       version: '',
//       deadline: '',
//       subject: '',
//       steps: ['Step 1', 'Step 2'],
//       select1: '',
//       select2: '',
//       select3: '',
//       expect: '',
//     };
//   }
//
//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };
//
//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state);
//     // Send form data to the server or perform other actions here
//   };
//
//   handleAddStep = () => {
//     this.setState((prevState) => ({
//       steps: [...prevState.steps, `Step ${prevState.steps.length + 1}`],
//     }));
//   };
//
//   render() {
//     const { steps } = this.state;
//
//     return (
//       <div className='center-container'>
//         <div className='container'>
//           <div className='row justify-content-center'>
//             <div className='col-md-6'>
//               <h1>Add Bug</h1>
//               <form onSubmit={this.handleSubmit}>
//                 <div className='form-group'>
//                   <label htmlFor='version'>Version:</label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     id='version'
//                     name='version'
//                     value={this.state.version}
//                     onChange={this.handleInputChange}
//                   />
//                 </div>
//                 <div className='form-group'>
//                   <label htmlFor='deadline'>Deadline:</label>
//                   <input
//                     type='date'
//                     className='form-control'
//                     id='deadline'
//                     name='deadline'
//                     value={this.state.deadline}
//                     onChange={this.handleInputChange}
//                   />
//                 </div>
//                 <div className='form-group'>
//                   <label htmlFor='subject'>Subject:</label>
//                   <textarea
//                     className='form-control'
//                     id='subject'
//                     name='subject'
//                     value={this.state.subject}
//                     onChange={this.handleInputChange}
//                   ></textarea>
//                 </div>
//
//                 {steps.map((step, index) => (
//                   <div key={index} className='form-group'>
//                     <label htmlFor={`step${index + 1}`}>{step}:</label>
//                     <input
//                       type='text'
//                       className='form-control'
//                       id={`step${index + 1}`}
//                       name={`step${index + 1}`}
//                       value={this.state[`step${index + 1}`]}
//                       onChange={this.handleInputChange}
//                     />
//                   </div>
//                 ))}
//
//                 <br />
//                 <center>
//                   <div className='fa-circle' onClick={this.handleAddStep}>
//                     <FontAwesomeIcon className='plus' icon={faPlus} />
//                   </div>
//                 </center>
//
//                 <div className='form-group'>
//                   <label htmlFor='expect'>Expect:</label>
//                   <textarea
//                     className='form-control'
//                     id='expect'
//                     name='expect'
//                     value={this.state.expect}
//                     onChange={this.handleInputChange}
//                   ></textarea>
//                 </div>
//
//                 <br />
//                 <div className='form-option'>
//                   <label className='select' htmlFor='lang-select2'>
//                     Status1
//                   </label>
//                   <div>
//                     <select name='lang' id='lang-select2'>
//                       <option value=''>New</option>
//                       <option value='csharp'>C#</option>
//                       <option value='dart'>New</option>
//                     </select>
//                   </div>
//
//                   <label className='select' htmlFor='lang-select2'>
//                     Frequency
//                   </label>
//                   <div>
//                     <select name='lang' id='lang-select2'>
//                       <option value=''>New</option>
//                       <option value='csharp'>C#</option>
//                       <option value='dart'>100%</option>
//                     </select>
//                   </div>
//
//                   <label className='select' htmlFor='lang-select3'>
//                     Assignee
//                   </label>
//                   <div>
//                     <select name='lang' id='lang-select3'>
//                       <option value=''>New</option>
//                       <option value='csharp'>C#</option>
//                       <option value='dart'>Dang Minh Quan</option>
//                     </select>
//                   </div>
//                 </div>
//
//                 <br />
//                 <div className='d-flex justify-content-end'>
//                   <button type='button' className='btn btn-secondary mr-2'>
//                     Cancel
//                   </button>
//                   <button type='submit' className='btn btn-primary'>
//                     Add
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default MyForm;
