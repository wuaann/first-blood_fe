import React, {ChangeEvent} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {BugByProject} from "../../../models/bugs";
import './bugTable.css';

import {useState} from 'react';
import {Button} from "@mui/material";

export interface BugTableProp {
    bugs: BugByProject[],
    onChange?: (name: string) => void,
    onClickSubmit: (BugPatch: BugByProject) => void
}

function BugTable({bugs, onChange}: BugTableProp) {
    const [selectedStatuses, setSelectedStatuses] = useState<any>('');

    const handleActionButtonClick = (bugId: any) => {
        if (bugId) {
            console.log(`Bug ID: ${bugId}, Selected Status:`, selectedStatuses);
        }
    };

    const [hoveredRow, setHoveredRow] = useState(null);

    const handleMouseEnter = (id:any) => {
        setHoveredRow(id);
    };

    const handleMouseLeave = () => {
        setHoveredRow(null);
    };


    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell>Bug ID</TableCell>
                    <TableCell>Category Name</TableCell>
                    <TableCell>Status Name</TableCell>
                    <TableCell>Priority Name</TableCell>
                    <TableCell>Reporter</TableCell>
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
                        <TableCell>{bug.status_name}</TableCell>
                        <TableCell>{bug.priority_name}</TableCell>
                        <TableCell>{bug.reporter_email}</TableCell>
                        <TableCell>{bug.assigned_email}</TableCell>
                        <TableCell>
                            <Button
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
