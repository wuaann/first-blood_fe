import React, { ChangeEvent } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BugByProject } from "../../../models/bugs";
import './bugTable.css';

import { useState } from 'react';
import { Button } from "@mui/material";

export interface BugTableProp {
    bugs: BugByProject[],
    onChange?: (name: string) => void,
    onClickSubmit: (BugPatch: BugByProject) => void
}

function BugTable({ bugs, onChange }: BugTableProp) {
    const [selectedStatuses, setSelectedStatuses] = useState<any>('');

    const handleActionButtonClick = (bugId: any) => {
        if (bugId) {
            console.log(`Bug ID: ${bugId}, Selected Status:`, selectedStatuses);
        }
    };

    const [hoveredRow, setHoveredRow] = useState(null);

    const handleMouseEnter = (id: any) => {
        setHoveredRow(id);
    };

    const handleMouseLeave = () => {
        setHoveredRow(null);
    };



    return (
        <Table style={{ marginTop: '10px' }}>
            <TableHead>
                <TableRow style={{ background: '#e0e0e0', borderRadius: '3px' }}>
                    <TableCell>STT</TableCell>
                    <TableCell>Bug ID</TableCell>
                    <TableCell>Category Name</TableCell>
                    <TableCell>Status Name</TableCell>
                    
                    <TableCell>Reporter</TableCell>
                    <TableCell>Priority Name</TableCell>
                    <TableCell>Assigned</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {bugs.map(bug => (
                    <TableRow
                        key={bug.id}
                        style={{
                            background: hoveredRow === bug.id ? '#f1f1f1' : 'transparent',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={() => handleMouseEnter(bug.id)}
                        onMouseLeave={() => handleMouseLeave()}
                    >
                        <TableCell>{bug.id}</TableCell>
                        <TableCell>{bug.id}</TableCell>
                        <TableCell>{bug.category_name}</TableCell>
                        <TableCell >
                            <button className={bug.status_name} style={{ backgroundColor: '#007bff', 
                            color: '#fff', borderRadius: '5px', width: '100px', height: '40px', border: 'none' }}>
                                {bug.status_name}
                            </button>
                        </TableCell>
                        <TableCell>{bug.reporter_email}</TableCell>
                        <TableCell>
                            <button  className={bug.priority_name} >{bug.priority_name}</button>
                            
                        </TableCell>
                        <TableCell>{bug.assigned_email}</TableCell>
                        <TableCell>
                            <Button
                                style={{ color: 'green', width: '20px' }}
                                onClick={() => {
                                    handleActionButtonClick(bug.id);
                                    setSelectedStatuses('');
                                }}
                                disabled={bug.id !== selectedStatuses}
                            >
                                Submit
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}


export default BugTable;
