import { MdExpandLess, MdExpandMore, MdDeleteOutline } from "react-icons/md";
import { FiFolderPlus } from "react-icons/fi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useState } from 'react';

const FileAndFolder = ({ data, addNode, deleteNode }) => {

  const [expanded, setExpanded] = useState({})

  return (
    <div>
      {data.map((item) => (
        <div class="container">
          {item?.isFolder && <span onClick={() => setExpanded((prev) => (
            {
              ...prev,
              [item?.name]: !prev[item?.name]
            }
          ))}
          > {expanded ? "-" : "+"}</span>}
          <span>{item?.name}</span>

          {item?.isFolder && <span onClick={() => addNode(item.id)}> [+] </span>}
          {<span onClick={() => deleteNode(item.id)}> [-] </span>}

          {expanded?.[item?.name] && item.children && <FileAndFolder data={item?.children} deleteNode={deleteNode} addNode={addNode} />}
        </div>
      ))}
    </div>
  );
};

export default FileAndFolder;
