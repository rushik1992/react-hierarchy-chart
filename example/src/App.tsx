import './App.scss';
import { INode, ReactHiererchyChart } from 'react-hierarchy-chart'


interface custNode extends INode {
  name: string;
  position: string;
  childs?: custNode[];
}

function App() {

  const nodes: custNode[] = [
    {
      name: 'Caleb Matthews',
      cssClass: 'level1',
      position: 'Chief Executive Officer',
      childs: [
        {
          name: 'Antonia Sancho',
          cssClass: 'level2',
          position: 'HR Manager'
        },
        {
          name: 'Thoms Hilty',
          cssClass: 'level2',
          position: 'Marketing Manager',
          childs: [
            {
              name: 'Eyal Matthews',
              cssClass: 'level3',
              position: 'Social Media'
            },
            {
              name: 'Adam Mark',
              cssClass: 'level3',
              position: 'Offline Marketing'
            }
          ]
        },
        {
          name: 'Barry Roy',
          cssClass: 'level2',
          position: 'Production Manager',
          childs: [
            {
              name: 'Ligia Opera',
              cssClass: 'level3',
              position: 'Supply Chain'
            },
            {
              name: 'Moran Perry',
              cssClass: 'level3',
              position: 'Operational Manager'
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="App">
      <h1>Vertical View</h1>
      <div className='hierarchy-viewer'>
        <ReactHiererchyChart nodes={nodes} direction='vertical'
          randerNode={(node: custNode) => {
            return <div className="node-template">
              <strong>{node.position} </strong>
              <span>{node.name} </span>
              <button onClick={() => { alert(node.name); }}>ok</button>
            </div>
          }} />
      </div>
      <h1>Horizontal View</h1>
      <div className='hierarchy-viewer'>
        <ReactHiererchyChart nodes={nodes} direction='horizontal'
          randerNode={(node: custNode) => {
            return <div className="node-template">
              <strong>{node.position} </strong>
              <span>{node.name} </span>
              <button onClick={() => { alert(node.name); }}>ok</button>
            </div>
          }} />
      </div>
    </div>
  );
}

export default App;
