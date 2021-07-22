import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export const ColumnColorPicker = props => {
  const [color, setColor] = useColor("hex", props.color);

  return <ColorPicker height={160} width={240} color={color} onChange={e => { props.updateColor(e.hex); setColor(e); }} hideHSV hideRGB dark />;
};