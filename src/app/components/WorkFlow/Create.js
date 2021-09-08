import React, { useState,useCallback,useEffect  } from 'react';
import WorkFlowForm from "../../components/WorkFlow/WorkFlowForm";
import ReactFlowPage from "../../components/WorkFlow/ReactFlowPage";
import localforage from 'localforage';
import Action from './action.data';
import Organization from './organization.data';
import  {
    removeElements,
    addEdge,
  } from 'react-flow-renderer';

  const initialElements = [
    {}
  ];

export function Create(props) {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
  setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const [selectAction, setSelectAction] = useState(0);
  const [selectOrganization, setSelectOrganization] = useState(0);
  const [isShow , setIsShow] = useState(false);
  const getNodeId = () => `randomnode_${+new Date()}`;
  //const [action, setAction] = React.useState("");
  const { actionStep } = Action;
  const { organization } = Organization;
  const [isDisabledSelectOrganization, setIsDisabledSelectOrganization] = useState(true);
  
  localforage.config({
    name: 'react-flow-docs',
    storeName: 'flows',
  });
  
    const onAdd = useCallback((value) => {
    if(value === 0){
      return;
    }

    const ActionName = actionStep.find(x => x.id === value);

    const newNode = {
        id: getNodeId(),
        data: { label: ActionName.name },
      position: {
        x: 100,
        y: 100,
      },
    };
      setElements((els) => els.concat(newNode));
      setSelectAction(0);
  }, [setElements]);

  //useEffect
  const handleShow = () => {
    setIsShow(true);
  }

  const handleClose = () => {
    setIsShow(false);
  }

    return (
        <div>
            <WorkFlowForm onAdd={onAdd}
                setElements={setElements}
                setSelectAction={setSelectAction}
                selectAction={selectAction}
                dataAction={actionStep}
                dataOrganization={organization}
                selectOrganization={selectOrganization}
                setSelectOrganization={setSelectOrganization}
                isDisabledSelectOrganization={isDisabledSelectOrganization}
                setIsDisabledSelectOrganization={setIsDisabledSelectOrganization}
        />
        <ReactFlowPage elements={elements} onConnect={onConnect} onElementsRemove={onElementsRemove}
        onClickShow = {handleShow}  onShow = {isShow} onClose = {handleClose}
        />
        </div>
    )
  }