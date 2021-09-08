import React from 'react';
import {ButtonToolbar,Button} from "react-bootstrap";

const SubmitWorkFlow = ({ disabled }) => {
    return (       
<ButtonToolbar>
<span className="pr-4">
                <Button variant="primary" disabled={disabled}>Submit</Button>
</span>
<span className="pr-4">
                <Button variant="success" disabled={disabled}>Save</Button>
  </span>
  <span className="pr-4">
                <Button variant="danger" disabled={disabled}>Perview</Button>
  </span>
</ButtonToolbar>
    );
};
export default SubmitWorkFlow;