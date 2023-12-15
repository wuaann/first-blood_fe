import React, {ChangeEvent, useState} from 'react';
import './bugfilter.css'
import {Link} from "react-router-dom";
import {User} from "../../../models";


export interface BugFilterProp {
    onChange?: (name: string) => void,
    onSearchChange?: (name: string) => void,
    onSelectAssignee?: (assigned?: string | unknown, reporter?: string | unknown) => void,
    memberList?: User[],
    project_name?: string,

}

function BugFilter({onChange,project_name ,memberList, onSelectAssignee, onSearchChange}: BugFilterProp) {
    const [activeButton, setActiveButton] = useState('');


    const handleButtonClick = (buttonId: string) => {
        setActiveButton(buttonId);
    };

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!onSearchChange) return;
        const name_like = e.target.value
        onSearchChange(name_like);
    }
    const handleAssignChange = (e: ChangeEvent<{ name?: string; value?: unknown }>) => {
        if (onSelectAssignee) {
            onSelectAssignee(e.target.value || undefined)
        }
    }
    const handlerReporterChange = (e: ChangeEvent<{ name?: string; value: unknown }>) => {
        if (onSelectAssignee) {
            onSelectAssignee(undefined, e.target.value || undefined)
        }
    }
    const handleSelectButton = (name:string) =>{
            if (onChange) {
                onChange(name)
            }
    }


    return (
        <>
            <div className="bug">
                <div style={{marginTop:'6px'}}>
                    <h1>{project_name?? 'error'}</h1>
                </div>
                <Link to={'add'}>
                    <button className="creactbug">Add Bug</button>
                </Link>
            </div>

            <div className="filter-container">
                <div className="filter-search">
                    <input onChange={handleSearchChange} type="text" id="bugIdInput" placeholder="Search"/>

                </div>
                <div className="filter-item">
                    <div onClick={() => {
                        handleButtonClick('button1')
                        handleSelectButton('New');
                    }}
                         className={activeButton === 'button1' ?
                             'button search-button active' :
                             'button search-button '}>New
                    </div>
                    <div onClick={() => {
                        handleButtonClick('button2')
                        handleSelectButton('Resolved')
                    }}
                         className={activeButton === 'button2' ?
                             'button search-button active' :
                             'button search-button '}>Resolved
                    </div>
                    <select onChange={handlerReporterChange} onClick={() =>
                        handleButtonClick('button3')
                    }
                            className={activeButton === 'button3' ?
                                'button search-button active' :
                                'button search-button'} id="statusSelect">
                        <option value=''>Select reporter</option>
                        {memberList?.map((member) => (
                            <option key={member.id} value={member.email}>{member.email}</option>
                        ))

                        }
                    </select>
                    <select onChange={handleAssignChange} onClick={() => handleButtonClick('button4')}
                            className={activeButton === 'button4' ?
                                'button search-button active' :
                                'button search-button dropdown'} id="statusSelect">
                        <option className='option' value=''>Select assign</option>

                        {memberList?.map((member) => (
                            <option key={member.id} value={member.email}>{member.email}</option>
                        ))

                        }
                    </select>
                </div>
            </div>


        </>
    );
}

export default BugFilter;