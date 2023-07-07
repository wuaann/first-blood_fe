import React from 'react';
import {BugByProject, Steps} from "../../../models/bugs";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import "./bugDetail.css"
import {Button} from "@mui/material";
import {useAppSelector} from "../../../app/hooks";
import {selectSteps} from "../bugSlice";

interface BugDetailProps {
    bug?: BugByProject
    onShow?: () => void
}

const BugDetail: React.FC<BugDetailProps> = ({bug, onShow,}) => {
    const steps = useAppSelector(selectSteps);
    console.log(steps)


    return (
        <>
            <div onClick={() => {
                if (onShow) {
                    onShow()
                }
            }} className="detail-bc">
            </div>

                <div className={"detail"}>
                    <h1>Bug Detail</h1>
                    <Table className={'detail-info'}>
                        <TableBody>
                            <TableRow>
                                <TableCell>STT</TableCell>
                                <TableCell>{bug?.id}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bug ID</TableCell>
                                <TableCell>{bug?.id}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>{bug?.title}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{bug?.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                {
                                    steps?.map((step) =>(
                                        <TableRow>
                                            <TableCell>step {step.step}</TableCell>
                                            <TableCell>{step.content}</TableCell>
                                        </TableRow>

                                    ))
                                }


                            </TableRow>
                            <TableRow>
                                <TableCell>Category Name</TableCell>
                                <TableCell>{bug?.category_name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Status Name</TableCell>
                                <TableCell>{bug?.status_name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Priority Name</TableCell>
                                <TableCell>{bug?.priority_name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Reporter</TableCell>
                                <TableCell>{bug?.reporter_email}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Assigned</TableCell>
                                <TableCell>{bug?.assigned_email}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Action</TableCell>
                                <TableCell><Button>Reject</Button></TableCell>
                                <TableCell><Button>Closed</Button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
        </>
    )

}

export default BugDetail;