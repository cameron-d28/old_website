interface HoverTargetProps {
  window: {
    width: number;
    height: number;
  };
  bg_image: {
    width: number;
    height: number;
  };
  div_size: {
    width: number;
    height: number;
  };
  div_pos: {
    left: number;
    top: number;
  };
}

const adjustHoverTarget = ({
  window,
  bg_image,
  div_size,
  div_pos,
}: HoverTargetProps) => {
  const { width: window_width, height: window_height } = window;
  const window_ratio = window_width / window_height;
  const { width: bg_width, height: bg_height } = bg_image;
  const bg_ratio = bg_width / bg_height;
  const { width: div_width, height: div_height } = div_size;
  const { left, top } = div_pos;

  let scale, bg_scaled_width, bg_scaled_height, bg_offset_x, bg_offset_y;

  if (window_ratio > bg_ratio) {
    // Window is wider than the background image
    scale = window_width / bg_width;
    bg_scaled_width = window_width;
    bg_scaled_height = bg_height * scale;
    bg_offset_x = 0;
    bg_offset_y = (window_height - bg_scaled_height) / 2;
  } else {
    // Window is taller than the background image
    scale = window_height / bg_height;
    bg_scaled_width = bg_width * scale;
    bg_scaled_height = window_height;
    bg_offset_x = (window_width - bg_scaled_width) / 2;
    bg_offset_y = 0;
  }

  const scaled_div_width = div_width * scale;
  const scaled_div_height = div_height * scale;
  const scaled_div_left = bg_offset_x + left * scale;
  const scaled_div_top = bg_offset_y + top * scale;

  return {
    size: {
      width: scaled_div_width,
      height: scaled_div_height,
    },
    pos: {
      left: scaled_div_left,
      top: scaled_div_top,
    },
  };
};

export { adjustHoverTarget };
