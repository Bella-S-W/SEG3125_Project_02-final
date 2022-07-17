import React,{Component} from 'react';
import {Tree, TreeNode} from 'react-organizational-chart';
import styled from 'styled-components';

const StyledNode = styled.div`
  top: 200px;
  padding: 30px;
  border-radius: 10px;
  display: inline-block;
  border: 4px solid blue;
`;
const Tully_familytree = () => (
    <Tree
      lineWidth={'2px'}
      lineColor={'black'}
      lineBorderRadius={'10px'}
      label={<StyledNode>Hoster Tully</StyledNode>}
    >
      <TreeNode label={<StyledNode>Edmure Tully</StyledNode>}>
      </TreeNode>

      <TreeNode label={<StyledNode> Catelyn Stark</StyledNode>}>
        <TreeNode label={<StyledNode>Robb Stark</StyledNode>} />
        <TreeNode label={<StyledNode>Sansa Stark</StyledNode>} />
        <TreeNode label={<StyledNode>Arya Stark</StyledNode>} />
        <TreeNode label={<StyledNode>Brandon Stark </StyledNode>}/>
        <TreeNode label={<StyledNode>Rickon Stark </StyledNode>}/>
      </TreeNode>
      <TreeNode label={<StyledNode>Lysa Arryn</StyledNode>}>
        <TreeNode label={<StyledNode>Robin Arryn</StyledNode>} />
      </TreeNode>
    </Tree>
  );

    export default Tully_familytree;