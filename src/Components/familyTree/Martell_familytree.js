import React,{Component} from 'react';
import {Tree, TreeNode} from 'react-organizational-chart';
import styled from 'styled-components';

const StyledNode = styled.div`
  top: 200px;
  padding: 30px;
  border-radius: 10px;
  display: inline-block;
  border: 4px solid maroon;
`;
const Martell_familytree = () => (
    <Tree
      lineWidth={'2px'}
      lineColor={'black'}
      lineBorderRadius={'10px'}
      label={<StyledNode>Unknown Martell</StyledNode>}

    >

      <TreeNode label={<StyledNode> Doran Martell</StyledNode>}>
      <TreeNode label={<StyledNode>Trystane Martell </StyledNode>}/>
      </TreeNode>
        <TreeNode label={<StyledNode>Elia Martell</StyledNode>}/>
        <TreeNode label={<StyledNode>Oberyn Martell</StyledNode>}>
        
        <TreeNode label={<StyledNode>Sand Snakes </StyledNode>}/>
        </TreeNode>
       
    </Tree>
  );

    export default Martell_familytree;