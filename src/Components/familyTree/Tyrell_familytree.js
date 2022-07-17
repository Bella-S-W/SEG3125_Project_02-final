import React,{Component} from 'react';
import {Tree, TreeNode} from 'react-organizational-chart';
import styled from 'styled-components';

const StyledNode = styled.div`
  top: 200px;
  padding: 30px;
  border-radius: 10px;
  display: inline-block;
  border: 4px solid olive;
`;
const Tyrell_familytree = () => (
    <Tree
      lineWidth={'2px'}
      lineColor={'black'}
      lineBorderRadius={'10px'}
      label={<StyledNode>Olenna Tyrell</StyledNode>}
    >
      <TreeNode label={<StyledNode>Mace Tyrell</StyledNode>}>
      <TreeNode label={<StyledNode>Margaery Tyrell</StyledNode>}/>
        <TreeNode label={<StyledNode>Loras Tyrell</StyledNode>} />
      </TreeNode>
    </Tree>
  );

    export default Tyrell_familytree;