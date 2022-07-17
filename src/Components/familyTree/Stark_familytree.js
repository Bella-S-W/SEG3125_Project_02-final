import React,{Component} from 'react';
import {Tree, TreeNode} from 'react-organizational-chart';
import styled from 'styled-components';

const StyledNode = styled.div`
  top: 200px;
  padding: 30px;
  border-radius: 10px;
  display: inline-block;
  border: 4px solid green;
`;
const Stark_familytree = () => (
    <Tree
      lineWidth={'2px'}
      lineColor={'black'}
      lineBorderRadius={'10px'}
      label={<StyledNode>Rickard Stark</StyledNode>}
    >
      <TreeNode label={<StyledNode>Brandon Stark</StyledNode>}>
      </TreeNode>

      <TreeNode label={<StyledNode>Eddard Stark</StyledNode>}>
        <TreeNode label={<StyledNode>Robb Stark</StyledNode>} />
        <TreeNode label={<StyledNode>Sansa Stark</StyledNode>} />
        <TreeNode label={<StyledNode>Arya Stark</StyledNode>} />
        <TreeNode label={<StyledNode>Brandon Stark </StyledNode>}/>
        <TreeNode label={<StyledNode>Rickon Stark </StyledNode>}/>
      </TreeNode>
      <TreeNode label={<StyledNode>Lyanna Stark</StyledNode>}>
        <TreeNode label={<StyledNode>Jon Snow</StyledNode>} />
      </TreeNode>
      <TreeNode label={<StyledNode>Benjen Stark</StyledNode>}>
      </TreeNode>
    </Tree>
  );

    export default Stark_familytree;