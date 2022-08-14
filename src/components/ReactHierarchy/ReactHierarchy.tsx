
import React, { ReactDOM } from "react";
import { INode, HierarchyNode } from "../HierarchyNode/HierarchyNode";
import "./ReactHierarchy.scss";


export interface ReactHierarchyProps {
    nodes: INode[],
    direction: 'vertical' | 'horizontal',
    randerNode: Function
}
const ReactHierarchy = ({ nodes, direction, randerNode }: ReactHierarchyProps) => {
    return <>
        <div className={`react-hierarchy-container`}>
            {
                nodes.map(node => <div className={`react-hierarchy-root-${direction}`}>
                    <HierarchyNode node={node} direction={direction} randerNode={randerNode} />
                </div>)
            }
        </div>
    </>
};

export default ReactHierarchy;
