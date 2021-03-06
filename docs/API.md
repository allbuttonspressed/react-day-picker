# Component API

* [Component props](APIProps.md)
* [Component methods](APIMethods.md)

## Props quick reference

| Prop | Default | Type |
| --- | --- | --- |
| [canChangeMonth](APIProps.md#canchangemonth) | true | `Bool` |
| [captionElement](APIProps.md#captionelement) | | `Element` |
| [disabledDays](APIProps.md#disableddays) | | `Bool` |
| [enableOutsideDays](APIProps.md#enableoutsidedays) | false | `Bool` |
| [fixedWeeks](APIProps.md#fixedWeeks) | false | `Bool` |
| [fromMonth](APIProps.md#frommonth) | | `Date` |
| [initialMonth](APIProps.md#initialmonth) | Current month | `Date` |
| [locale](APIProps.md#locale) | en | `String` |
| [localeUtils](APIProps.md#localeutils) | | `Object` |
| [modifiers](APIProps.md#modifiers) | | `Object` |
| [navbarComponent](APIProps.md#navbarcomponent) | | `Component` |
| [numberOfMonths](APIProps.md#numberofmonths) | 1 | `Number` |
| [onCaptionClick](APIProps.md#oncaptionclick) | | `(e: SyntethicEvent, currentMonth: Date) ⇒ void` |
| [onDayClick](APIProps.md#ondayclick) | | `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void` |
| [onDayMouseEnter](APIProps.md#ondaymouseenter) | | `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void` |
| [onDayMouseLeave](APIProps.md#ondaymouseleave) | | `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void` |
| [onDayTouchStart](APIProps.md#ondaytouchstart) | | `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void` |
| [onDayTouchEnd](APIProps.md#ondaytouchend) | | `(e: SyntethicEvent, day: Date, modifiers: Object) ⇒ void` |
| [onMonthChange](APIProps.md#onmonthchange) | | `(month: Date) ⇒ void` |
| [renderDay](APIProps.md#renderday) | day ⇒ day.getDate() | `(day: Date) ⇒ Element` |
| [reverseMonths](APIProps.md#reversemonths) | false | `Bool` |
| [selectedDays](APIProps.md#selecteddays) | | `Bool` |
| [tabIndex](APIProps.md#tabindex) | | `Number` |
| [toMonth](APIProps.md#tomonth) | | `Date` |
| [weekdayComponent](APIProps.md#weekdaycomponent) | | `Component` |
