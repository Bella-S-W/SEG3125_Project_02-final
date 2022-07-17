import React,{Component} from 'react';
import {Tree, TreeNode} from 'react-organizational-chart';
import styled from 'styled-components';

const StyledNode = styled.div`
  top: 200px;
  padding: 30px;
  border-radius: 10px;
  display: inline-block;
  border: 4px solid red;
`;
const Targaryen_familytree = () => (
    <Tree
      lineWidth={'2px'}
      lineColor={'black'}
      lineBorderRadius={'10px'}
      label={<StyledNode>Maekar I Targaryen</StyledNode>}
    >
      <TreeNode label={<StyledNode>Maester Aemon Targaryen</StyledNode>}>
      </TreeNode>

      <TreeNode label={<StyledNode>Aegon V Targaryen</StyledNode>}>
      <TreeNode label={<StyledNode>Rhaelle Targaryen</StyledNode>}/>
      <TreeNode label={<StyledNode>Jaehaerus II Targaryen</StyledNode>}>
      <TreeNode label={<StyledNode>Aerys II Targaryenn</StyledNode>}>
      <TreeNode label={<StyledNode>Rhaegar Targaryen</StyledNode>}>
      <TreeNode label={<StyledNode>Jon Snow</StyledNode>}/>
      </TreeNode>
      <TreeNode label={<StyledNode>Viserys Targaryen</StyledNode>}/>
      <TreeNode label={<StyledNode>Daenerys Targaryen</StyledNode>}/>

      </TreeNode>      
        </TreeNode>
        </TreeNode>
    </Tree>
  );

    export default Targaryen_familytree;