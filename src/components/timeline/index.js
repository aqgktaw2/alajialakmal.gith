import classNames from "classnames";

import {
	StyledTimeline,
	StyledTimelineItem,
	StyleTimelineItemInner,
	StyleTimelineItemIcon,
} from "./styles";

const Timeline = ({ children, ...restProps }) => (
	<StyledTimeline {...restProps}>{children}</StyledTimeline>
);

const TimelineItem = ({ children, Icon, animation = true, ...restProps }) => (
	<StyledTimelineItem data-gsap={classNames("", { "reveal-bottom": animation })}>
		<StyleTimelineItemIcon>{Icon}</StyleTimelineItemIcon>
		<StyleTimelineItemInner {...restProps}>{children}</StyleTimelineItemInner>
	</StyledTimelineItem>
);

Timeline.Item = TimelineItem;

export default Timeline;
