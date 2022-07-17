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
const Lannister_familytree = () => (
    <Tree
      lineWidth={'2px'}
      lineColor={'black'}
      lineBorderRadius={'10px'}
      label={<StyledNode>Tywin Lannister</StyledNode>}
    >

      <TreeNode label={<StyledNode> Jaime Lannister</StyledNode>}/>
        <TreeNode label={<StyledNode>Cersel Baratheon</StyledNode>}>
        <TreeNode label={<StyledNode>Joffrey Baratheon</StyledNode>} />
        <TreeNode label={<StyledNode>Myrcella Baratheon </StyledNode>}/>
        <TreeNode label={<StyledNode>Thommen Baratheon </StyledNode>}/>
        </TreeNode>
        <TreeNode label={<StyledNode>Tyrion Lannister</StyledNode>} />
    </Tree>
  );

    export default Lannister_familytree;