import { useState } from "react";
import FileAndFolder from "./FileAndFolder";
import './styles.css'

const initialData = [
  {
    id: 1,
    name: "public",
    isFolder: true,
    children: [{ id: 2, name: "index.html", isFolder: false }],
  },
  {
    id: 3,
    name: "src",
    isFolder: true,
    children: [
      { id: 4, name: "App.js", isFolder: false },
      { id: 5, name: "index.js", isFolder: false },
    ],
  },
  { id: 6, name: "package.json", isFolder: false },
];

export default function FileExplorer() {
  const [data, setData] = useState(initialData);
  const [idCounter, setIdCounter] = useState(7);

  const deleteNode = (nodeId) => {

    const update = (list) => {
      return list.filter(node => node.id !== nodeId)?.map((node) => {
        if (node.children) {
          return {
            ...node,
            children: update(node.children)
          }
        }
        return node
      })
    }

    setData(prev => update(prev))

  }

  const addNode = (nodeId) => {

    const name = prompt("Enter name")

    const update = (list) => {

      return list.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            children: [...node.children, {
              name: name,
              id: idCounter,
              isFolder: true,
              children: []
            }]
          }

        }
        if (node.children) {
          return {
            ...node,
            children: update(node.children)
          }
        }

        return node
      })

    }

    setData(prev => update(prev))
    setIdCounter(prev => prev + 1)

  }

  return (
    <div>
      <h2>File Explorer</h2>
      <FileAndFolder data={data} deleteNode={deleteNode} addNode={addNode} />
    </div>
  );
}
