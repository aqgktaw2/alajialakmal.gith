import classNames from "classnames";

const Timeline = ({ children, className, ...restProps }) => (
	<section className={classNames("timeline", className)} {...restProps}>
		{children}
	</section>
);

const TimelineItem = ({ children, className, Icon, animation = true, ...restProps }) => (
	<div data-gsap={classNames("", { "reveal-bottom": animation })} className="timeline__item">
		<span className="timeline__item-icon">{Icon}</span>
		<div className={classNames("timeline__item-inner", className)} {...restProps}>
			{children}
		</div>
	</div>
);

Timeline.Item = TimelineItem;

export default Timeline;
