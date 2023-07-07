import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const BugAdd = () => {
    const [version, setVersion] = useState('');
    const [deadline, setDeadline] = useState('');
    const [subject, setSubject] = useState('');
    const [steps, setSteps] = useState(['Step 1', 'Step 2']);
    const [select1, setSelect1] = useState('');
    const [select2, setSelect2] = useState('');
    const [select3, setSelect3] = useState('');
    const [expect, setExpect] = useState('');

    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        switch (name) {
            case 'version':
                setVersion(value);
                break;
            case 'deadline':
                setDeadline(value);
                break;
            case 'subject':
                setSubject(value);
                break;
            case 'expect':
                setExpect(value);
                break;
            default:
                // For step inputs (step1, step2, ...)
                if (name.startsWith('step')) {
                    const stepIndex = parseInt(name.slice(4), 10) - 1;
                    setSteps((prevSteps) => {
                        const updatedSteps = [...prevSteps];
                        updatedSteps[stepIndex] = value;
                        return updatedSteps;
                    });
                }
                break;
        }
    };

    const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log({
            version,
            deadline,
            subject,
            steps,
            select1,
            select2,
            select3,
            expect,
        });
        // Send form data to the server or perform other actions here
    };

    const handleAddStep = () => {
        setSteps((prevSteps) => [...prevSteps, `Step ${prevSteps.length + 1}`]);
    };

    return (
        <div className='center-container min-vh-100'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className=''>
                        <h1>Add Bug</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor='version'>Version:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='version'
                                    name='version'
                                    value={version}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='deadline'>Deadline:</label>
                                <input
                                    type='date'
                                    className='form-control'
                                    id='deadline'
                                    name='deadline'
                                    value={deadline}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='subject'>Subject:</label>
                                <textarea
                                    className='form-control'
                                    id='subject'
                                    name='subject'
                                    value={subject}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>

                            {steps.map((step, index) => (
                                <div key={index} className='form-group'>
                                    <label htmlFor={`step${index + 1}`}>{step}:</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id={`step${index + 1}`}
                                        name={`step${index + 1}`}
                                        value={steps[index]}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            ))}

                            <br />
                            <center>
                                <div className='fa-circle' onClick={handleAddStep}>
                                    <FontAwesomeIcon className='plus' icon={faPlus} />
                                </div>
                            </center>

                            <div className='form-group'>
                                <label htmlFor='expect'>Expect:</label>
                                <textarea
                                    className='form-control'
                                    id='expect'
                                    name='expect'
                                    value={expect}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>

                            <br />
                            <div className='form-option'>
                                <label className='select' htmlFor='lang-select2'>
                                    Status1
                                </label>
                                <div>
                                    <select
                                        name='lang'
                                        id='lang-select2'
                                        value={select1}
                                        onChange={(e) => setSelect1(e.target.value)}
                                    >
                                        <option value=''>New</option>
                                        <option value='csharp'>C#</option>
                                        <option value='dart'>New</option>
                                    </select>
                                </div>

                                <label className='select' htmlFor='lang-select2'>
                                    Frequency
                                </label>
                                <div>
                                    <select
                                        name='lang'
                                        id='lang-select2'
                                        value={select2}
                                        onChange={(e) => setSelect2(e.target.value)}
                                    >
                                        <option value=''>New</option>
                                        <option value='csharp'>C#</option>
                                        <option value='dart'>100%</option>
                                    </select>
                                </div>

                                <label className='select' htmlFor='lang-select3'>
                                    Assignee
                                </label>
                                <div>
                                    <select
                                        name='lang'
                                        id='lang-select3'
                                        value={select3}
                                        onChange={(e) => setSelect3(e.target.value)}
                                    >
                                        <option value=''>New</option>
                                        <option value='csharp'>C#</option>
                                        <option value='dart'>Dang Minh Quan</option>
                                    </select>
                                </div>
                            </div>

                            <br />
                            <div className='d-flex justify-content-end'>
                                <button type='button' className='btn btn-secondary mr-2'>
                                    Cancel
                                </button>
                                <button type='submit' className='btn btn-primary'>
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BugAdd;
