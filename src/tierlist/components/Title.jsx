import React, { useState, useRef, useEffect } from 'react';
import { Image, Dropdown, ButtonGroup, OverlayTrigger, Tooltip, ToggleButton, Modal } from 'react-bootstrap';
import { ColorPicker, useColor, toColor } from "react-color-palette";
import styled from 'styled-components';
import tool from '../imgs/tool.svg'
import palette from '../imgs/palette.svg'
import "react-color-palette/lib/css/styles.css";
import '../tierlist-styles.css'

const TitleStyle = styled.h3.attrs(props => ({
  style: {
    backgroundColor: props.color,
  },
  }))`padding: 8px;
  margin-bottom: 0;
  display: flex;
  max-width: 21rem;
  user-select: none;
`;

// how tf do i make this full height when editing
const InputStyle = styled.textarea`
    flex-grow: 1;
    overflow: hidden;
    word-break: break-all;
    min-height: 40px;
    max-width: 14.25rem;
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
            <button className="column-remove-button" onClick={() => props.colData.itemIds.length > 0 ? setdeleteModalShow(true) : deleteCol(id, false)}>×</button>
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
          <button id="keep-items" onClick={() => {setdeleteModalShow(false); deleteCol(id, true);}}>
            Keep
          </button>
          <button id="delete-items" onClick={() => {setdeleteModalShow(false); deleteCol(id, false);}}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>

      <TitleStyle color={color_p.hex}>
        <React.Fragment>
          {inputVisible ? (
            <form style={{width: "100%", display: "flex", alignItems: "center"}} onSubmit={() => { setInputVisible(false); props.setEditing(false); }} ref={inputRef}>
              <InputStyle
                value={title}
                onChange={e => {
                  setTitle(e.target.value);
                  update(id, e.target.value, color);
                }}
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
                    <Image src={palette} fluid alt='colors' style={{width: "100%", height: "100%"}}/>
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
                        onChange={(e) => setColor_P(toColor("hex", color))}
                      />
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </form>
          ) : (
            <div style={{width: "100%", display: "flex", alignItems: "center"}}>
              <div style={{color: "white", textShadow: "0 0 4px black", wordBreak: "break-all", flexGrow: "1", overflow: "hidden"}}>{title}</div>
                <OverlayTrigger
                  placement={'top'}
                  overlay={<Tooltip>Edit Column</Tooltip>}
                >
                <ButtonStyle onClick={() => { setInputVisible(true); props.setEditing(true); }}>
                  <Image src={tool} fluid alt='settings' style={{width: "100%", height: "100%"}}/>
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