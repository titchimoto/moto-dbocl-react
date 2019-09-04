import styled from 'styled-components';

export const SidebarContainer = styled.div`
  border-radius: 5px;
  overflow: auto;
  width: 100%;
  background: #ffffff;
  float: right;
  position: relative;
  max-height: 90vh;
  box-sizing: border-box;
`

export const FileDropContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  border: 1px dotted #D5DDE7;
  border-radius: 5px;
  background: #F5F8FA;
`

export const NoteContainer = styled.div`
  background: #109CF1;
  border-radius: 5px;
  color: white;
  padding: 5px;
`

export const NoteInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  bottom: -5px;
  background: white;
`
