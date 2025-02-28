import React from "react";
import { Handle, Position } from "reactflow";

import * as UseBlocks from "../UseBlocks";

const UseComponentsMap = {
  analyze: UseBlocks.Analyze,
  report: UseBlocks.Report,
  browse: UseBlocks.Browse,
  instagram: UseBlocks.Instagram,
  google: UseBlocks.Google,
  udemy: UseBlocks.Udemy,
  youtube: UseBlocks.Youtube,
  // Add other mappings here
};

const UseNode = ({ data }) => {
  const { use_type, addNextNode } = data;
  const UseComponent =
    UseComponentsMap[use_type] || (() => <div>Unknown Use Type</div>);

  return (
    <div className="relative w-[290px] bg-white rounded-[10px] border-[2px] border-[#EBEBEB] px-[12px] py-[20px]">
      <div>
        <UseComponent addNextNode={addNextNode} />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#555" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
      />
    </div>
  );
};

export default UseNode;
