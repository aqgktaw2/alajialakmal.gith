import { TECH_ICONS } from "@lib/constants";

import { TechIconWrapper } from "./styles";

const TechIcon = props => {
	const { techName, ...restProps } = props;
	return <TechIconWrapper {...restProps}>{TECH_ICONS[techName]}</TechIconWrapper>;
};

export default TechIcon;
