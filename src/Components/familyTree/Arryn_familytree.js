import React,{Component} from 'react';
import {Tree, TreeNode} from 'react-organizational-chart';
import styled from 'styled-components';

const StyledNode = styled.div`
  top: 200px;
  padding: 30px;
  border-radius: 10px;
  display: inline-block;
  border: 4px solid black;
`;
const Arryn_familytree = () => (
    <Tree
      lineWidth={'2px'}
      lineColor={'black'}
      lineBorderRadius={'10px'}
      label={<StyledNode>Jon Arryn</StyledNode>}
    >
      <TreeNode label={<StyledNode>Robin Arryn</StyledNode>}>
      </TreeNode>

    </Tree>
  );

    export default Arryn_familytree;