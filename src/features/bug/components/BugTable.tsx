import React, {CSSProperties} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BugByProject} from "../../../models/bugs";
import {useAppSelector} from "../../../app/hooks";
import {selectBugLoading} from "../bugSlice";




export interface BugTableProp {
    bugs: BugByProject[]
}

export function BugTable({bugs}: BugTableProp) {
    const loading = useAppSelector(selectBugLoading)
    return (

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Bug ID</TableCell>
                    <TableCell>STT</TableCell>
                    <TableCell>Project Name</TableCell>
                    <TableCell>Category Name</TableCell>
                    <TableCell>Status Name</TableCell>
                    <TableCell>Priority Name</TableCell>
                    <TableCell>Reporter</TableCell>
                    <TableCell>Assigned </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {bugs.map(bug => (
                    <TableRow key={bug.id}>
                        <TableCell>{bug.id}</TableCell>
                        <TableCell>{bug.id}</TableCell>
                        <TableCell>{bug.project_name}</TableCell>
                        <TableCell>{bug.category_name}</TableCell>
                        <TableCell
                            className={`status-${bug.status_name.toLowerCase()}`} // Apply different class based on status
                        >
                            {bug.status_name}
                        </TableCell>
                        <TableCell>{bug.priority_name}</TableCell>
                        <TableCell>{bug.reporter_email}</TableCell>
                        <TableCell>{bug.assigned_email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}


export default BugTable;
