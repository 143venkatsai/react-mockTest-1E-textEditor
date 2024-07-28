import styled from 'styled-components'

export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #25262c;
  padding: 40px 100px;
`
export const TextImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  background-color: #1b1c22;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  align-items: center;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  color: #f8fafc;
  margin-bottom: 100px;
`

export const TextImage = styled.img`
  height: 250px;
  width: 300px;
`

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 10px;
  width: 100%;
  margin: 20px 20px;
`
export const EditOptions = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #334155;
  padding-bottom: 10px;
  padding-left: 10px;
  border-top: none;
  border-left: none;
  border-right: none;
`

export const Option = styled.li`
  list-style-type: none;
`
export const EditButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  color: ${props => props.color};
`

// export const HorizontalLine = styled.hr`
//   width: 100%;
//   background-color: #334155;
//   height: 0.5px;
// `
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const Text = styled.textarea`
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  font-size: 14px;
  color: #cbd5e1;
  background-color: transparent;
  border: none;
  width: 100%;
  outline: none;
  padding: 0px 10px;
`
