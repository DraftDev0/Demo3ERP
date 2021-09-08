import React from 'react';
import {Card, CardBody, CardHeader,CardFooter} from "../../../../src/_metronic/_partials/controls/Card";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SubmitWorkFlow from '../WorkFlow/SubmitWorkFlow';
import {Form, Col, Row} from "react-bootstrap";


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

function WorkFlowForm(props) {
    
    const classes = useStyles();
    const actionHandleClick = props.onAdd.bind(this, props.selectAction);

    //console.log(props.dataOrganization);

    function handleOrganizationChange(value) {
        props.setSelectOrganization(value);
        if (value === 0 || value === '0') {
            props.setIsDisabledSelectOrganization(true);
        } else {
            props.setIsDisabledSelectOrganization(false);
        }
    }

    function handleActionChange(value) {
        props.setSelectAction(value);
    }

    return ( 
        <Card className="example example-compact">
        <CardHeader title="Create New Work Flow" />
        <CardBody>
        <Form>
                <Form.Group as={Row} controlId="">
                  <Form.Label column sm={1}>
                    Name
                  </Form.Label>
                  <Col sm={11}>
                    <Form.Control type="text" placeholder="Name" />
                  </Col>
                </Form.Group>
        <Form.Group as={Row} controlId="">
        <Form.Label column sm={2}>
                            Organization
        </Form.Label>
        <Col sm={3}>
        <Select
          value={props.selectOrganization}
          onChange={e => handleOrganizationChange(e.target.value)}
          style={{width:'250px'}}
                            >
                                <MenuItem value="0">                </MenuItem>
                                {props.dataOrganization.length ?
                                    props.dataOrganization.map(dataOrganization =>
                                    (
                                        <MenuItem key={dataOrganization.id} value={dataOrganization.id}>{dataOrganization.name}</MenuItem>
                                    ))                                        
                                        :
                                    (
                                        null
                                    )
                                    }

        </Select>
        </Col>
       </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2}>
                            Action
                        </Form.Label>
                        <Col sm={3}>
                            <Select
                                value={props.selectAction}
                                onChange={e => handleActionChange(e.target.value)}
                                style={{ width: '250px' }}
                                disabled={props.isDisabledSelectOrganization}
                            >
                                <MenuItem value="0">                  </MenuItem>
                                {props.dataAction.length ?
                                    props.dataAction.map(dataAction =>
                                    (
                                        <MenuItem key={dataAction.id} value={dataAction.id}>{dataAction.name}</MenuItem>
                                    ))
                                    :
                                    (
                                        null
                                    )
                                }
                            </Select>
                        </Col>
                        <Col sm={1}>
                            <Button variant="contained" color="primary" className={classes.button} onClick={actionHandleClick} disabled={props.isDisabledSelectOrganization}>
                                Add
                            </Button>
                        </Col>
                    </Form.Group>
       <Form.Group as={Row} controlId="">
       <Form.Label column sm={1}>
                    Remark
                  </Form.Label>
                  <Col sm={11}>
                            <Form.Control type="text" placeholder="Name" disabled={props.isDisabledSelectOrganization} />
                  </Col>
       </Form.Group>
       </Form>
        </CardBody>
        <CardFooter>
                <SubmitWorkFlow disabled={props.isDisabledSelectOrganization} />
        </CardFooter>
      </Card>
    );
}

export default WorkFlowForm;