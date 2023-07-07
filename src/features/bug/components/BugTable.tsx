import React, {useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {BugByProject} from "../../../models/bugs";
import './bugTable.css';

import {useState} from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import BugDetail from "./BugDetail";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {bugActions, selectSteps} from "../bugSlice";

export interface BugTableProp {
    bugs: BugByProject[],
    onChange?: (name: string) => void,
    onClickSubmit: (BugPatch: BugByProject) => void
}

function BugTable({bugs, onChange}: BugTableProp) {
    const [bug, setBug] = useState<BugByProject>()
    const [show, setShow] = useState(false)
    const [selectedStatuses, setSelectedStatuses] = useState<any>('');
    const dispatch = useAppDispatch();
    const [hoveredRow, setHoveredRow] = useState(null);

    const handleMouseEnter = (id:any) => {
        setHoveredRow(id);
    };

    const handleShow = () => {
        setShow(!show)

    }

    const handleMouseLeave = () => {
        setHoveredRow(null);
    };

    return (
      <>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>STT</TableCell>
                      <TableCell>Bug ID</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Description</TableCell>
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
                          onClick={() => {
                              handleShow();
                              setBug(bug)
                          }}
                          onMouseEnter={() => handleMouseEnter(bug.id)}
                          onMouseLeave={() => handleMouseLeave()}
                      >
                          <TableCell>{bug.id}</TableCell>
                          <TableCell>{bug.id}</TableCell>
                          <TableCell>{bug.title}</TableCell>
                          <TableCell>{bug.description}</TableCell>
                          <TableCell>{bug.category_name}</TableCell>
                          <TableCell>{bug.status_name}</TableCell>
                          <TableCell>{bug.priority_name}</TableCell>
                          <TableCell>{bug.reporter_email}</TableCell>
                          <TableCell>{bug.assigned_email}</TableCell>
                          <TableCell>
                              <Button
                                  onClick={() => {
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
          {show && <BugDetail onShow={handleShow} bug={bug}/>}
      </>
    );
}


export default BugTable;
