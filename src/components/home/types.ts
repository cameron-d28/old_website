export interface Link {
  label: string;
  href: string;
}

// interface HoverTargetProps {
//   window: {
//     width: number;
//     height: number;
//   };
//   bg_image: {
//     width: number;
//     height: number;
//   };
//   div_size: {
//     width: number;
//     height: number;
//   };
//   div_pos: {
//     left: number;
//     top: number;
//   };
// }

// const adjustHoverTarget = ({
//   window,
//   bg_image,
//   div_size,
//   div_pos,
// }: HoverTargetProps) => {
//   const { width: window_width, height: window_height } = window;
//   const window_ratio = window_width / window_height;
//   const { width: bg_width, height: bg_height } = bg_image;
//   const bg_ratio = bg_width / bg_height;
//   const { width: div_width, height: div_height } = div_size;
//   const { left, top } = div_pos;

//   const stretch = window_ratio > bg_ratio;

//   // Convert top position from pixels to percentage of the window height
//   //   const topPositionPercentage = (top / window_height) * 100;
//   const topPositionPercentage = top / window_height;
//   console.log(topPositionPercentage);

//   // Calculate top position based on window_ratio
//   const topPercentage =
//     (topPositionPercentage / (bg_ratio - 1.7)) * (window_ratio - 1.7) * 100;

//   const clampedTopPercentage = Math.max(0, Math.min(topPercentage, 22)); // Clamp between 0% and 22%

//   const n_w = div_width / window_width;
//   const n_h = div_height / window_height;

//   return {
//     pos: {
//       left: window_width / 2,
//       top: `${clampedTopPercentage}%`,
//     },
//     size: {
//       width: stretch ? n_w * window_width : n_w * window_height,
//       height: stretch
//         ? n_h * window_width
//         : (n_h * window_height) / window_ratio,
//     },
//     stretch,
//   };
// };

// export { adjustHoverTarget };
