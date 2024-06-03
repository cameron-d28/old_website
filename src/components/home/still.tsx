import WheelCircle from "../WheelCircle";
import { HoverTypes, LinkProps } from "../WheelCircle/types";

interface StillHomeProps {
  about_links: LinkProps[];
  learn_links: LinkProps[];
  future_links: LinkProps[];
}

const StillHome = ({
  about_links,
  learn_links,
  future_links,
}: StillHomeProps) => {
  return (
    <div className="navigation-body">
      <WheelCircle hovertype={HoverTypes.straight} links={about_links} />
      <WheelCircle hovertype={HoverTypes.straight} links={learn_links} />
      <WheelCircle hovertype={HoverTypes.spiral} links={future_links} />
    </div>
  );
};

export default StillHome;
