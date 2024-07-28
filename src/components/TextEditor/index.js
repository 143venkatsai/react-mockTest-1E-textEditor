import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  TextEditorContainer,
  TextImageContainer,
  ImageContainer,
  MainHeading,
  TextImage,
  EditContainer,
  EditOptions,
  Option,
  EditButton,
  //   HorizontalLine,
  TextContainer,
  Text,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false, text: ''}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline, text} = this.state
    const boldIcon = isBold ? '#faff00' : '#f1f5f9'
    const italicIcon = isItalic ? '#faff00' : '#f1f5f9'
    const underlineIcon = isUnderline ? '#faff00' : '#f1f5f9'

    return (
      <TextEditorContainer>
        <TextImageContainer>
          <ImageContainer>
            <MainHeading>Text Editor</MainHeading>
            <TextImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <EditContainer>
            <EditOptions>
              <Option>
                <EditButton
                  data-testid="bold"
                  onClick={this.onClickBold}
                  color={boldIcon}
                >
                  <VscBold size={20} />
                </EditButton>
              </Option>
              <Option>
                <EditButton
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  color={italicIcon}
                >
                  <GoItalic size={20} />
                </EditButton>
              </Option>
              <Option>
                <EditButton
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  color={underlineIcon}
                >
                  <AiOutlineUnderline size={20} />
                </EditButton>
              </Option>
            </EditOptions>
            {/* <HorizontalLine /> */}
            <TextContainer>
              <Text
                rows={22}
                isBold={isBold}
                isItalic={isItalic}
                isUnderline={isUnderline}
              >
                {text}
              </Text>
            </TextContainer>
          </EditContainer>
        </TextImageContainer>
      </TextEditorContainer>
    )
  }
}

export default TextEditor
