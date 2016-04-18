import React, { Component, PropTypes } from "react";
import * as Helpers from "./Helpers";
import * as DateUtils from "./DateUtils";
import * as LocaleUtils from "./LocaleUtils";

const keys = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  ENTER: 13,
  SPACE: 32
};

class Caption extends Component { // eslint-disable-line

  render() {
    const { date, locale, localeUtils, onClick } = this.props;
    return (
      <div className="DayPicker-Caption" onClick={ onClick }>
        { localeUtils.formatMonthTitle(date, locale) }
      </div>
    );
  }
}

export default class DayPicker extends Component {
  static VERSION = "2.0.0-beta";

  static propTypes = {
    tabIndex: PropTypes.number,
    initialMonth: PropTypes.instanceOf(Date),
    numberOfMonths: PropTypes.number,

    modifiers: PropTypes.object,

    locale: PropTypes.string,
    localeUtils: PropTypes.shape({
      formatMonthTitle: PropTypes.func,
      formatWeekdayShort: PropTypes.func,
      formatWeekdayLong: PropTypes.func,
      getFirstDayOfWeek: PropTypes.func
    }),

    enableOutsideDays: PropTypes.bool,
    canChangeMonth: PropTypes.bool,
    reverseMonths: PropTypes.bool,
    fromMonth: PropTypes.instanceOf(Date),
    toMonth: PropTypes.instanceOf(Date),

    onDayKeyDown: PropTypes.func,
    onDayKeyDownCapture: PropTypes.func,
    onDayKeyPress: PropTypes.func,
    onDayKeyPressCapture: PropTypes.func,
    onDayKeyUp: PropTypes.func,
    onDayKeyUpCapture: PropTypes.func,
    onDayFocus: PropTypes.func,
    onDayFocusCapture: PropTypes.func,
    onDayBlur: PropTypes.func,
    onDayBlurCapture: PropTypes.func,
    onDayClick: PropTypes.func,
    onDayClickCapture: PropTypes.func,
    onDayContextMenu: PropTypes.func,
    onDayContextMenuCapture: PropTypes.func,
    onDayDoubleClick: PropTypes.func,
    onDayDoubleClickCapture: PropTypes.func,
    onDayDrag: PropTypes.func,
    onDayDragCapture: PropTypes.func,
    onDayDragEnd: PropTypes.func,
    onDayDragEndCapture: PropTypes.func,
    onDayDragEnter: PropTypes.func,
    onDayDragEnterCapture: PropTypes.func,
    onDayDragExit: PropTypes.func,
    onDayDragExitCapture: PropTypes.func,
    onDayDragLeave: PropTypes.func,
    onDayDragLeaveCapture: PropTypes.func,
    onDayDragOver: PropTypes.func,
    onDayDragOverCapture: PropTypes.func,
    onDayDragStart: PropTypes.func,
    onDayDragStartCapture: PropTypes.func,
    onDayDrop: PropTypes.func,
    onDayDropCapture: PropTypes.func,
    onDayMouseDown: PropTypes.func,
    onDayMouseDownCapture: PropTypes.func,
    onDayMouseEnter: PropTypes.func,
    onDayMouseEnterCapture: PropTypes.func,
    onDayMouseLeave: PropTypes.func,
    onDayMouseLeaveCapture: PropTypes.func,
    onDayMouseMove: PropTypes.func,
    onDayMouseMoveCapture: PropTypes.func,
    onDayMouseOut: PropTypes.func,
    onDayMouseOutCapture: PropTypes.func,
    onDayMouseOver: PropTypes.func,
    onDayMouseOverCapture: PropTypes.func,
    onDayMouseUp: PropTypes.func,
    onDayMouseUpCapture: PropTypes.func,
    onDayTouchCancel: PropTypes.func,
    onDayTouchCancelCapture: PropTypes.func,
    onDayTouchEnd: PropTypes.func,
    onDayTouchEndCapture: PropTypes.func,
    onDayTouchMove: PropTypes.func,
    onDayTouchMoveCapture: PropTypes.func,
    onDayTouchStart: PropTypes.func,
    onDayTouchStartCapture: PropTypes.func,
    onDayScroll: PropTypes.func,
    onDayScrollCapture: PropTypes.func,
    onDayWheel: PropTypes.func,
    onDayWheelCapture: PropTypes.func,

    onCaptionKeyDown: PropTypes.func,
    onCaptionKeyDownCapture: PropTypes.func,
    onCaptionKeyPress: PropTypes.func,
    onCaptionKeyPressCapture: PropTypes.func,
    onCaptionKeyUp: PropTypes.func,
    onCaptionKeyUpCapture: PropTypes.func,
    onCaptionFocus: PropTypes.func,
    onCaptionFocusCapture: PropTypes.func,
    onCaptionBlur: PropTypes.func,
    onCaptionBlurCapture: PropTypes.func,
    onCaptionClick: PropTypes.func,
    onCaptionClickCapture: PropTypes.func,
    onCaptionContextMenu: PropTypes.func,
    onCaptionContextMenuCapture: PropTypes.func,
    onCaptionDoubleClick: PropTypes.func,
    onCaptionDoubleClickCapture: PropTypes.func,
    onCaptionDrag: PropTypes.func,
    onCaptionDragCapture: PropTypes.func,
    onCaptionDragEnd: PropTypes.func,
    onCaptionDragEndCapture: PropTypes.func,
    onCaptionDragEnter: PropTypes.func,
    onCaptionDragEnterCapture: PropTypes.func,
    onCaptionDragExit: PropTypes.func,
    onCaptionDragExitCapture: PropTypes.func,
    onCaptionDragLeave: PropTypes.func,
    onCaptionDragLeaveCapture: PropTypes.func,
    onCaptionDragOver: PropTypes.func,
    onCaptionDragOverCapture: PropTypes.func,
    onCaptionDragStart: PropTypes.func,
    onCaptionDragStartCapture: PropTypes.func,
    onCaptionDrop: PropTypes.func,
    onCaptionDropCapture: PropTypes.func,
    onCaptionMouseDown: PropTypes.func,
    onCaptionMouseDownCapture: PropTypes.func,
    onCaptionMouseEnter: PropTypes.func,
    onCaptionMouseEnterCapture: PropTypes.func,
    onCaptionMouseLeave: PropTypes.func,
    onCaptionMouseLeaveCapture: PropTypes.func,
    onCaptionMouseMove: PropTypes.func,
    onCaptionMouseMoveCapture: PropTypes.func,
    onCaptionMouseOut: PropTypes.func,
    onCaptionMouseOutCapture: PropTypes.func,
    onCaptionMouseOver: PropTypes.func,
    onCaptionMouseOverCapture: PropTypes.func,
    onCaptionMouseUp: PropTypes.func,
    onCaptionMouseUpCapture: PropTypes.func,
    onCaptionTouchCancel: PropTypes.func,
    onCaptionTouchCancelCapture: PropTypes.func,
    onCaptionTouchEnd: PropTypes.func,
    onCaptionTouchEndCapture: PropTypes.func,
    onCaptionTouchMove: PropTypes.func,
    onCaptionTouchMoveCapture: PropTypes.func,
    onCaptionTouchStart: PropTypes.func,
    onCaptionTouchStartCapture: PropTypes.func,
    onCaptionScroll: PropTypes.func,
    onCaptionScrollCapture: PropTypes.func,
    onCaptionWheel: PropTypes.func,
    onCaptionWheelCapture: PropTypes.func,

    onMonthChange: PropTypes.func,

    renderDay: PropTypes.func,

    captionElement: PropTypes.element
  };

  static defaultProps = {
    tabIndex: 0,
    initialMonth: new Date(),
    numberOfMonths: 1,
    locale: "en",
    localeUtils: LocaleUtils,
    enableOutsideDays: false,
    canChangeMonth: true,
    reverseMonths: false,
    renderDay: day => day.getDate(),
    captionElement: <Caption />
  };

  constructor(props) {
    super(props);
    this.state = {
      currentMonth: Helpers.startOfMonth(props.initialMonth)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.initialMonth !== nextProps.initialMonth) {
      this.setState({
        currentMonth: Helpers.startOfMonth(nextProps.initialMonth)
      });
    }
  }

  allowPreviousMonth() {
    const previousMonth = DateUtils.addMonths(this.state.currentMonth, -1)
    return this.allowMonth(previousMonth);
  }

  allowNextMonth() {
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
    return this.allowMonth(nextMonth);
  }

  allowMonth(d) {
    const { fromMonth, toMonth } = this.props;
    if ((fromMonth && Helpers.getMonthsDiff(fromMonth, d) < 0) ||
      (toMonth && Helpers.getMonthsDiff(toMonth, d) > 0)) {
      return false;
    }
    return true;
  }

  showMonth(d, callback) {
    if (!this.allowMonth(d)) {
      return;
    }

    this.setState({
      currentMonth: Helpers.startOfMonth(d)
    }, callback);
  }

  showMonthAndCallHandler(d, callback) {
    this.showMonth(d, () => {
      if (callback) {
        callback();
      }
      if (this.props.onMonthChange) {
        this.props.onMonthChange(this.state.currentMonth);
      }
    });
  }

  showNextMonth(callback) {
    if (this.allowNextMonth()) {
      const nextMonth = DateUtils.addMonths(this.state.currentMonth, 1);
      this.showMonthAndCallHandler(nextMonth, callback);
    }
  }

  showPreviousMonth(callback) {
    if (this.allowPreviousMonth()) {
      const previousMonth = DateUtils.addMonths(this.state.currentMonth, -1);
      this.showMonthAndCallHandler(previousMonth, callback);
    }
  }

  showNextYear(callback) {
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, 12);
    this.showMonthAndCallHandler(nextMonth, callback);
  }

  showPreviousYear(callback) {
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, -12);
    this.showMonthAndCallHandler(nextMonth, callback);
  }

  getDayNodes() {
    return this.refs.dayPicker.querySelectorAll(".DayPicker-Day:not(.DayPicker-Day--outside)");
  }

  focusFirstDayOfMonth() {
    this.getDayNodes()[0].focus();
  }

  focusLastDayOfMonth() {
    const dayNodes = this.getDayNodes();
    dayNodes[dayNodes.length - 1].focus();
  }

  focusPreviousDay(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = [...dayNodes].indexOf(dayNode);

    if (dayNodeIndex === 0) {
      this.showPreviousMonth(() => { this.focusLastDayOfMonth() })
    } else {
      dayNodes[dayNodeIndex - 1].focus();
    }
  }

  focusNextDay(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = [...dayNodes].indexOf(dayNode);

    if (dayNodeIndex === dayNodes.length - 1) {
      this.showNextMonth(() => { this.focusFirstDayOfMonth() });
    } else {
      dayNodes[dayNodeIndex + 1].focus();
    }
  }

  focusNextWeek(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = [...dayNodes].indexOf(dayNode);
    const isInLastWeekOfMonth = dayNodeIndex > dayNodes.length - 8;

    if (isInLastWeekOfMonth) {
      this.showNextMonth(() => {
        const daysAfterIndex = dayNodes.length - dayNodeIndex;
        const nextMonthDayNodeIndex = 7 - daysAfterIndex;
        this.getDayNodes()[nextMonthDayNodeIndex].focus();
      });
    } else {
      dayNodes[dayNodeIndex + 7].focus();
    }
  }

  focusPreviousWeek(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = [...dayNodes].indexOf(dayNode);
    const isInFirstWeekOfMonth = dayNodeIndex <= 6;

    if (isInFirstWeekOfMonth) {
      this.showPreviousMonth(() => {
        const previousMonthDayNodes = this.getDayNodes();
        const startOfLastWeekOfMonth = previousMonthDayNodes.length - 7;
        const previousMonthDayNodeIndex = startOfLastWeekOfMonth + dayNodeIndex;
        previousMonthDayNodes[previousMonthDayNodeIndex].focus();
      });
    } else {
      dayNodes[dayNodeIndex - 7].focus();
    }
  }

  // Event handlers

  handleKeyDown(e) {
    e.persist();
    const { canChangeMonth, onKeyDown } = this.props;

    if (!canChangeMonth && onKeyDown) {
      onKeyDown(e);
      return;
    }

    if (canChangeMonth) {
      switch (e.keyCode) {
      case keys.LEFT:
        this.showPreviousMonth(onKeyDown);
        break;
      case keys.RIGHT:
        this.showNextMonth(onKeyDown);
        break;
      case keys.UP:
        this.showPreviousYear(onKeyDown);
        break;
      case keys.DOWN:
        this.showNextYear(onKeyDown);
        break;
      default:
        if (onKeyDown) {
          onKeyDown(e);
        }
      }
    }
  }

  handleEvent(eventName, e, day, modifiers) {
    e.persist();

    if (this.props[eventName]) {
      this.props[eventName](e, day, modifiers);
    }
    if (e.isDefaultPrevented()) {
      // If preventDefault() was called, prevent built-in actions
      return;
    }

    if (eventName === "onDayKeyDown") {
      switch (e.keyCode) {
      case keys.LEFT:
        Helpers.cancelEvent(e);
        this.focusPreviousDay(e.target);
        break;
      case keys.RIGHT:
        Helpers.cancelEvent(e);
        this.focusNextDay(e.target);
        break;
      case keys.UP:
        Helpers.cancelEvent(e);
        this.focusPreviousWeek(e.target);
        break;
      case keys.DOWN:
        Helpers.cancelEvent(e);
        this.focusNextWeek(e.target);
        break;
      case keys.ENTER:
      case keys.SPACE:
        if (this.props.onDayClick) {
          this.handleEvent("onDayClick", e, day, modifiers);
        }
        Helpers.cancelEvent(e);
        break;
      }
    } else if (eventName === "onDayClick") {
      if (modifiers.indexOf("outside") > -1) {
        this.handleOutsideDayPress(day);
      }
    }
  }

  handleOutsideDayPress(day) {
    const { currentMonth } = this.state;
    const { numberOfMonths } = this.props;
    const diffInMonths = Helpers.getMonthsDiff(currentMonth, day);
    if (diffInMonths > 0 && diffInMonths >= numberOfMonths) {
      this.showNextMonth();
    } else if (diffInMonths < 0) {
      this.showPreviousMonth();
    }
  }

  renderNavBar() {
    const baseClass = "DayPicker-NavButton DayPicker-NavButton";
    const isRTL = this.props.dir === "rtl";

    const leftButton = isRTL ? this.allowNextMonth() : this.allowPreviousMonth();
    const rightButton = isRTL ? this.allowPreviousMonth() : this.allowNextMonth();

    return (
      <div className="DayPicker-NavBar">
        { leftButton &&
          <span
            key="left"
            className={ `${baseClass}--prev` }
            onClick={ () => isRTL ? this.showNextMonth() : this.showPreviousMonth() }
          />
        }
        { rightButton &&
          <span
            key="right"
            className={ `${baseClass}--next` }
            onClick={ () => isRTL ? this.showPreviousMonth() : this.showNextMonth() }
          />
        }
      </div>
    );
  }

  cellEventProps(prefix, date, modifiers=null) {
    const cellProps = {};
    // Find all props with given prefix and use them as handler for the corresponding
    // event on the cell
    for (const propName in this.props) {
      if (propName.lastIndexOf(prefix, 0) === 0) {
        const eventName = propName.substring(prefix.length);
        cellProps["on".concat(eventName)] = (e) => {
          this.handleEvent(propName, e, date, modifiers);
        }
      }
    }
    return cellProps;
  }

  renderMonth(date, i) {
    const { locale, localeUtils, captionElement } = this.props;

    const captionProps = this.cellEventProps("onCaption", date);
    captionProps["date"] = date;
    captionProps["localeUtils"] = localeUtils;
    captionProps["locale"] = locale;

    const caption = React.cloneElement(captionElement, captionProps);

    return (
      <div
        className="DayPicker-Month"
        key={ i }>

        { caption }

        <div className="DayPicker-Weekdays" role="rowgroup">
          <div className="DayPicker-WeekdaysRow" role="columnheader">
            { this.renderWeekDays() }
          </div>
        </div>
        <div className="DayPicker-Body" role="rowgroup">
          { this.renderWeeksInMonth(date) }
        </div>
      </div>
    );
  }

  renderWeekDays() {
    const { locale, localeUtils } = this.props;
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={ i } className="DayPicker-Weekday">
          <abbr title={ localeUtils.formatWeekdayLong(i, locale) }>
            { localeUtils.formatWeekdayShort(i, locale) }
          </abbr>
        </div>
      );
    }
    return days;
  }

  renderWeeksInMonth(month) {
    const { locale, localeUtils } = this.props;
    const firstDayOfWeek = localeUtils.getFirstDayOfWeek(locale);
    return Helpers.getWeekArray(month, firstDayOfWeek).map((week, i) =>
      <div key={ i } className="DayPicker-Week" role="row">
        { week.map(day => this.renderDay(month, day)) }
      </div>
    );
  }

  renderDay(month, day) {

    const { enableOutsideDays, modifiers: modifierFunctions } = this.props;

    let className = "DayPicker-Day";
    let modifiers = [];
    const key = `${day.getFullYear()}${day.getMonth()}${day.getDate()}`;

    const isToday = DateUtils.isSameDay(day, new Date());
    if (isToday) {
      modifiers.push("today");
    }

    const isOutside = day.getMonth() !== month.getMonth();
    if (isOutside) {
      modifiers.push("outside");
    }

    if (modifierFunctions) {
      const customModifiers = Helpers.getModifiersForDay(day, modifierFunctions);
      modifiers = [...modifiers, ...customModifiers];
    }

    className += modifiers.map(modifier => ` ${className}--${modifier}`).join("");

    if (isOutside && !enableOutsideDays) {
      return <div key={ `outside-${key}` } className={ className } />;
    }

    const { onDayClick } = this.props;
    let tabIndex = null;
    if (onDayClick && !isOutside) {
      tabIndex = -1;
      // Focus on the first day of the month
      if (day.getDate() === 1) {
        tabIndex = this.props.tabIndex;
      }
    }

    const { localeUtils, locale } = this.props;
    const ariaLabel = localeUtils.formatDay(day, locale);
    const ariaDisabled = isOutside ? "true" : "false";

    const dayEventProps = this.cellEventProps("onDay", day, modifiers);
    if (!dayEventProps["onDayKeyDown"]) {
      dayEventProps["onKeyDown"] = (e) => {
        this.handleEvent("onDayKeyDown", e, day, modifiers);
      }
    }

    return (
      <div key={ key } className={ className }
        tabIndex={ tabIndex }
        role="gridcell"
        aria-label={ ariaLabel }
        aria-disabled={ ariaDisabled }
        {...dayEventProps}
        >
        { this.props.renderDay(day) }
      </div>
    );
  }

  render() {
    const { numberOfMonths, locale, canChangeMonth, reverseMonths, ...attributes } = this.props;
    const { currentMonth } = this.state;
    let className = `DayPicker DayPicker--${locale}`;

    if (!this.props.onDayClick) {
      className = `${className} DayPicker--interactionDisabled`;
    }
    if (attributes.className) {
      className = `${className} ${attributes.className}`;
    }

    const months = [];
    let month;
    for (let i = 0; i < numberOfMonths; i++) {
      month = DateUtils.addMonths(currentMonth, i);
      months.push(this.renderMonth(month, i));
    }

    if (reverseMonths) {
      months.reverse();
    }

    return (
      <div
        {...attributes}
        className={ className }
        ref="dayPicker"
        role="widget"
        tabIndex={ canChangeMonth && attributes.tabIndex }
        onKeyDown={ e => this.handleKeyDown(e) }>
        { canChangeMonth && this.renderNavBar() }
        { months }
      </div>
    );
  }


}
