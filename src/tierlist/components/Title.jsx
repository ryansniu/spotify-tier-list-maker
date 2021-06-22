import React, { useState, useRef, useEffect } from 'react';
import { Image, Dropdown, ButtonGroup } from 'react-bootstrap'
import styled from 'styled-components';
import tool from '../imgs/tool.svg'
import palette from '../imgs/palette.svg'
import '../tierlist-styles.css'


const TitleStyle = styled.h3`
    background-color: ${props => props.color};
    padding: 8px;
    margin-bottom: 0;
    display: flex;
    max-width: 21rem;
`;

// how tf do i make this full height when editing
const InputStyle = styled.textarea`
    flex-grow: 1;
    overflow: hidden;
    word-break: break-all;
    min-height: 40px;
    max-width: 17rem;
    height: 40px;
    resize: both;
`;

const ButtonStyle = styled.button`
    width: 40px;
    min-width: 40px;
    height: 40px;
    float: right;
    margin-left: 8px;
    outline: none;
    background: transparent no-repeat;
    border: none;
    border-radius: 50%;
`;

const Title = props => {
  const inputRef = useRef(null);
  const [id] = useState(props.colData.id);
  const [title, setTitle] = useState(props.colData.title);
  const [color, setColor] = useState(props.colData.color);
  const [inputVisible, setInputVisible] = useState(false);
  const update = props.updateHeader;
  const deleteHandler = props.deleteHandler;

  function onClickOutSide(e) {
    if (inputRef.current && !inputRef.current.contains(e.target)) setInputVisible(false);
  }

  useEffect(() => {
    if (inputVisible) document.addEventListener("mousedown", onClickOutSide);
    return () => { document.removeEventListener("mousedown", onClickOutSide); };  //apparently happens when the button is clicked as well
  });

  return (
    <TitleStyle color={color}>
      <React.Fragment>
        {inputVisible ? (
          <form style={{width: "100%", display: "flex", alignItems: "center"}} onSubmit={() => setInputVisible(false)} ref={inputRef}>
            <InputStyle
              value={title}
              onChange={e => {
                setTitle(e.target.value);
                update(id, e.target.value, color);
              }}
            />
            <Dropdown as={ButtonGroup} drop="right">
              <Dropdown.Toggle id='color-toggle'>
                <Image src={palette} fluid alt='colors' style={{width: "100%", height: "100%"}}/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item style={{backgroundColor: "gray"}} onClick={() => { setColor('gray'); update(id, title, 'gray'); }}>Gray</Dropdown.Item>
                <Dropdown.Item style={{backgroundColor: "blue"}} onClick={() => { setColor('blue'); update(id, title, 'blue'); }}>Blue</Dropdown.Item>
                <Dropdown.Item style={{backgroundColor: "purple"}} onClick={() => { setColor('purple'); update(id, title, 'purple'); }}>Purple</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item style={{backgroundColor: "#1DB954"}} onClick={() => { setColor('#1DB954'); update(id, title, '#1DB954'); }}>Default</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => { deleteHandler(id); }}>DELETE THIS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </form>
        ) : (
          <div style={{width: "100%", display: "flex", alignItems: "center"}}>
            <div style={{color: "white", textShadow: "0 0 4px black", wordBreak: "break-all", flexGrow: "1", overflow: "hidden"}}>{title}</div>
            <ButtonStyle onClick={() => setInputVisible(true)}>
              <Image src={tool} fluid alt='settings' style={{width: "100%", height: "100%"}}/>
            </ButtonStyle> 
          </div>
        )}
      </React.Fragment>
    </TitleStyle>
  );
};

export default Title; 