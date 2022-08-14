
import React, { ReactDOM } from "react";
import "./HierarchyNode.scss";

export interface INode {
    cssClass: string | "";
    childs?: INode[];
}

export interface HiererchyNodeProps {
    node: INode,
    direction: 'vertical' | 'horizontal',
    randerNode: Function,
    hasParent?: boolean
}
export const HierarchyNode = ({ node, direction, randerNode, hasParent }: HiererchyNodeProps) => {
    return <div className={`react-hierarchy-node-container react-hierarchy-node-container-${direction}`}>
        <div className={`react-hierarchy-node react-hierarchy-node-${direction}`}>
            {
                hasParent && <div className={`node-line node-line-${direction}`}></div>
            }
            <div className={`node-box ngx-hierarchy-border ${node.cssClass}`}>
                {randerNode(node)}
            </div>
            {
                node?.childs?.length ? <div className={`node-line node-line-${direction}`} ></div> : <></>
            }
        </div>
        {
            node.childs?.length &&
            <div className={`react-hierarchy-children react-hierarchy-children-${direction}`}>
                {
                    node.childs.map((child, index) => {
                        let isLast = (node.childs?.length || 0) - 1 === index;
                        return (
                            <div className={`children-container children-container-${direction}`}>
                                <div className={`lines-container lines-container-${direction}`} >
                                    <div className="lines"></div>
                                    <div className="m-line"></div>
                                    <div className="lines"></div>
                                </div>
                                <HierarchyNode node={child}
                                    direction={direction}
                                    randerNode={randerNode}
                                    hasParent={true}
                                />
                            </div>);
                    })
                }
            </div>
        }
    </div>
};
