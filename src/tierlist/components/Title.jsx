import React, { useState, useRef, useEffect } from 'react';
import { Image, Dropdown, Button, ButtonGroup, OverlayTrigger, Tooltip, ToggleButton, Modal } from 'react-bootstrap';
import { ColorPicker, useColor, toColor } from "react-color-palette";
import styled from 'styled-components';
import settings_black from '../imgs/cog-black.svg'
import palette_black from '../imgs/palette-black.svg'
import settings_white from '../imgs/cog-white.svg'
import palette_white from '../imgs/palette-white.svg'
import cross from '../imgs/cross.svg'
import "react-color-palette/lib/css/styles.css";
import '../tierlist-styles.css'

const TitleStyle = styled.h3.attrs(props => ({
  style: {
    borderBottom: `4px solid ${props.color}`,
    backgroundColor: props.color
  },
  }))`padding: 0 8px;
  margin-bottom: 0;
  display: flex;
  max-width: 18.25rem;
  user-select: none;
  font-size: 2rem;
`;

const InputStyle = styled.textarea`
    flex-grow: 1;
    overflow: hidden;
    height: auto;
    resize: none;
    outline: none;
    border: none;
    border-radius: 0.25rem;
`;

const ButtonStyle = styled.button`
    width: 40px;
    min-width: 40px;
    height: 40px;
    margin-left: 8px;
    outline: none;
    background: transparent;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    & .img-fluid {
      transition: transform 0.1s ease-in-out;
    }
    &:hover .img-fluid {
      transform: rotate(150deg);
    }
`;

const Title = props => {
  const inputRef = useRef(null);
  const textareaRef = useRef(null);
  const [id, setID] = useState(props.colData.id);
  const [title, setTitle] = useState(props.colData.title);
  const [color, setColor] = useState(props.colData.color);
  const [color_p, setColor_P] = useColor("hex", props.colData.color);
  const [inputVisible, setInputVisible] = useState(false);
  const [colorPickerVisible, setcolorPickerVisible] = useState(false);
  const [deleteModalShow, setdeleteModalShow] = useState(false);
  const update = props.updateHeader;
  const deleteCol = props.deleteHandler;
  const presetColors = props.presetColors;


  function onClickOutSide(e) {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setInputVisible(false);
      if(colorPickerVisible) {
        setcolorPickerVisible(false);
        update(id, title, color_p.hex); 
      }
      props.setEditing(false);
    }
  }

  // There's a bug here where the textarea will be 1 pixel off the title text but whatever i guess
  useEffect(() => {
    if (textareaRef.current && textareaRef.current.scrollHeight) {
      textareaRef.current.style.height = 'inherit';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputVisible]);

  useEffect(() => {
    if (inputVisible) document.addEventListener("mousedown", onClickOutSide);
    return () => { document.removeEventListener("mousedown", onClickOutSide); };
  });

  useEffect(() => {
    setID(props.colData.id);
    setTitle(props.colData.title);
    setColor(props.colData.color);
  }, [props.colData]);

  return (
    <div>
      {props.showDeleteButton && (
          <div style={{position: "relative"}}>
            <button className="column-remove-button" onClick={() => props.colData.itemIds.length > 0 ? setdeleteModalShow(true) : deleteCol(id, false)}>
              <Image onDragStart={e => e.preventDefault()} src={cross} fluid alt='delete column' style={{width: "75%", height: "75%"}}/>
            </button>
          </div>
      )}
      <Modal id="delete-modal" show={deleteModalShow} onHide={() => setdeleteModalShow(false)} size="sm">
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to keep or delete the column contents?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" id="keep-items" onClick={() => {setdeleteModalShow(false); deleteCol(id, true);}}>Keep</Button>
          <Button variant="danger" id="delete-items" onClick={() => {setdeleteModalShow(false); deleteCol(id, false);}}>Delete</Button>
          <Button variant="secondary" id="cancel-delete-btn" onClick={() => {setdeleteModalShow(false);}}>Cancel</Button>
        </Modal.Footer>
      </Modal>

      <TitleStyle color={color_p.hex}>
        <React.Fragment>
          {inputVisible ? (
            <form style={{width: "100%", display: "flex", alignItems: "center"}} onSubmit={() => { setInputVisible(false); props.setEditing(false);}} ref={inputRef}>
              <InputStyle
                value={title}
                placeholder="Column Title"
                onChange={e => {
                  setTitle(e.target.value);
                  update(id, e.target.value, color);
                }}
                onInput={e => {
                  e.target.style.height = 'inherit';
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                rows='1'
                ref={textareaRef}
              />
              <Dropdown autoClose="inside" as={ButtonGroup} drop="right"
                onToggle={(isOpen) => {
                  setcolorPickerVisible(isOpen);
                  if(!isOpen) update(id, title, color_p.hex);
                }}
              >
                <OverlayTrigger
                  placement={'top'}
                  overlay={<Tooltip>Edit Color</Tooltip>}
                >
                  <Dropdown.Toggle id='color-toggle' variant="secondary">
                    <Image onDragStart={e => e.preventDefault()} src={color_p.hsv.v < 50 ? palette_white : palette_black} fluid alt='colors' style={{width: "100%", height: "100%"}}/>
                  </Dropdown.Toggle>
                </OverlayTrigger>
                <Dropdown.Menu id='color-dropdown' variant="dark">
                  <ColorPicker height={160} width={240} color={color_p} onChange={e => {
                    if(e.hsv.h >= 360) {
                      let newHSV = e.hsv;
                      newHSV.h = 360;
                      e = toColor("hsv", newHSV);
                    }
                    setColor_P(e);
                    props.setBorderColor(e.hex);
                  }} hideRGB hideHSV dark />

                  <div id="preset-colors">
                    {presetColors.map((color, idx) => (
                      <ToggleButton
                        key={idx}
                        className = "preset-color-button"
                        id={`color-${idx}`}
                        type="radio"
                        variant="light"
                        style={{backgroundColor: color}}
                        onChange={() => {setColor_P(toColor("hex", color)); props.setBorderColor(color);}}
                      />
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </form>
          ) : (
            <div style={{width: "100%", display: "flex", alignItems: "center"}}>
              <div style={{color: "white", textShadow: "0 0 4px black", wordBreak: "break-all", flexGrow: "1", letterSpacing: "0"}}>
                {title.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
                <OverlayTrigger
                  placement={'top'}
                  overlay={<Tooltip>Edit Column</Tooltip>}
                >
                  <ButtonStyle onClick={() => { setInputVisible(true); props.setEditing(true); }}>
                    <Image onDragStart={e => e.preventDefault()} src={color_p.hsv.v < 50 ? settings_white : settings_black} fluid alt='settings' style={{width: "100%", height: "100%"}}/>
                  </ButtonStyle> 
                </OverlayTrigger>
            </div>
          )}
        </React.Fragment>
      </TitleStyle>
    </div>
  );
};

export default Title; 