import React, { useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
} from 'react-flow-renderer';
import JonnModal from '../UI/JonnModal';
// you need these styles for React Flow to work properly
import 'react-flow-renderer/dist/style.css';

// additionally you can load the default theme
import 'react-flow-renderer/dist/theme-default.css';


const style = {
  background: '#1a1a27',
  width: '100%',
  height: 400,
};

function ReactFlowPage(props) {

  return (
    <div>
     <JonnModal  handleShow={props.onShow} handleClose={props.onClose}/>
    <div style={{ height: 400 }}>
    <ReactFlowProvider>
    <ReactFlow 
      style={style}
      elements={props.elements}
      onElementsRemove={props.onElementsRemove}
      onConnect={props.onConnect}
      onElementClick={props.onClickShow}
    >
    </ReactFlow>
  </ReactFlowProvider>
    </div>
    </div>
  );
};

export default ReactFlowPage;