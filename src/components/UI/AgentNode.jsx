import React from "react";
import { Handle, Position } from "reactflow";
import * as AgentBlocks from "../AgentBlocks"; // Import all components from AgentBlocks
import Google from "../AgentBlocks/Google";

const AgentComponentsMap = {
  instagram: AgentBlocks.Instagram,
  twitter: AgentBlocks.Twitter,
  spotify: AgentBlocks.Spotify,
  linkedin: AgentBlocks.Linkedin,
  google: AgentBlocks.Google,
  youtube: AgentBlocks.Youtube,
  image: AgentBlocks.Image,
  analyse: AgentBlocks.Analyse,
  report: AgentBlocks.Report,
  // Add other mappings here
};

const AgentNode = ({ data }) => {
  const { agent_type } = data;
  const AgentComponent =
    AgentComponentsMap[agent_type] || (() => <div>Unknown Agent Type</div>);

  return (
    <div className="relative w-[290px] bg-white rounded-[10px] border-[2px] border-[#EBEBEB] px-[12px] py-[20px]">
      <div>
        <AgentComponent />
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

export default AgentNode;
