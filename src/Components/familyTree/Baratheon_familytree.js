import React,{Component} from 'react';
import {Tree, TreeNode} from 'react-organizational-chart';
import styled from 'styled-components';

const StyledNode = styled.div`
  top: 200px;
  padding: 30px;
  border-radius: 10px;
  display: inline-block;
  border: 4px solid orange;
`;
const Baratheon_familytree = () => (
    <Tree
      lineWidth={'2px'}
      lineColor={'black'}
      lineBorderRadius={'10px'}
      label={<StyledNode>Ormund Baratheon</StyledNode>}
    >
      <TreeNode label={<StyledNode>Steffon Baratheon</StyledNode>}>
      <TreeNode label={<StyledNode>Robert Baratheon</StyledNode>}>
      <TreeNode label={<StyledNode>Joffrey Baratheon</StyledNode>}/>
      <TreeNode label={<StyledNode>Myrcella Baratheon</StyledNode>}/>
      <TreeNode label={<StyledNode>Tommen Baratheon</StyledNode>}/>
      </TreeNode>
      <TreeNode label={<StyledNode>Stannis Baratheon</StyledNode>}>
      <TreeNode label={<StyledNode>Shireen Baratheon</StyledNode>}/>
      </TreeNode>
      <TreeNode label={<StyledNode>Renly Baratheon</StyledNode>}/>
      </TreeNode>   
    </Tree>
  );

    export default Baratheon_familytree;