import styled from 'styled-components';

export const MainContent = styled.div`
  background: #f5f6f8;
  display: flex;
  overflow: auto;
  min-height: 100vh;
`

export const PopOutContainer = styled.div`
  position: absolute;
  background: white;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  z-index: 10;
  max-width: 300px;
  min-width: 100px;
  padding: 20px;
  margin: 35px 0px;
`

export const ContentSection = styled.section`
  background: white;
  margin: 12px;
  border-radius: 5px;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  overflow: auto;
`

export const Container = styled.div`
  padding: ${({padding}) => padding || ''};

  &.padding-10 {
    padding: 10px;
  }
  &.padding-20 {
    padding: 20px;
  }
`

// General Multipurpose Flex Containers
// export const FlexContainer = styled.div`
//   display: flex;
//   align-items: center;
//   padding: ${({padding}) => padding || ''};
//
//   &.flex-start {
//     justify-content: flex-start;
//   }
//
//   &.space-between {
//     justify-content: space-between;
//   }
//
//   &.space-evenly {
//     justify-content: space-evenly;
//   }
//
//   &.center {
//     justify-content: center;
//   }
//
//   &.columns {
//     flex-flow: column;
//     align-items: flex-start;
//   }
// `

// export const FlexColumn = styled.div`
//   display: flex;
//   flex-flow: column;
// `

export const Row = styled.div`
  border-top: 1px solid #D6D6D6;
  border-bottom: 1px solid #D6D6D6;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #D5DDE7;
`

// Date and Schedule Row Containers
export const DateRowContainer = styled.div`
  height: 40px;
  background: linear-gradient(90deg, #323C47 15.63%, #40D5FF 86.56%);
  border-radius: 5px;
  padding: 0px 10px;
  color: white;
  margin: 15px 0px 5px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${({props}) => props && props};
`

export const ScheduleRowContainer = styled.div`
  height: 65px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  margin: 10px 0px;
`

export const ScheduleRowGrid = styled.div`
  display: grid;
  grid-template-columns: 5% 15% 50% 15% 15%;
  align-items: center;
  padding: 0px 10px 0px 20px;
  grid-gap: 10px;
  height: 100%;

  &.grid-column-1 {
    grid-column: 1;
  }
  &.grid-column-2 {
    grid-column: 2;
  }
  &.grid-column-3 {
    grid-column: 3;
  }
  &.grid-column-4 {
    grid-column: 4;
  }
  &.grid-column-5 {
    grid-column: 5;
  }
`

// Notes Containers
export const NoteContainer = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  margin: 20px 0px;
  padding: 10px;
`
