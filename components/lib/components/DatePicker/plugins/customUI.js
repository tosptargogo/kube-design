"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = require("lodash");

var customUI = function customUI() {
  return function (fp) {
    if (fp.config.noCalendar || fp.isMobile) return {};
    var isOpen = false;
    var elements = {};

    var handleSelectYear = function handleSelectYear(e) {
      var item = e.target;
      if (item.classList.contains("disabled")) return;
      fp.changeYear(Number(item.getAttribute("data-value")));
    };

    var handleSelectMonth = function handleSelectMonth(e) {
      var item = e.target;
      if (item.classList.contains("disabled")) return;
      fp.changeMonth(Number(item.getAttribute("data-value")), false);
    };

    var scrollToOption = function scrollToOption(el) {
      var wrap = el;
      var activeItem = wrap.querySelector(".is-active");
      if (!activeItem) return;
      var scrollTop = wrap.scrollTop;
      var scrollBottom = scrollTop + wrap.offsetHeight;
      var optionTop = activeItem.offsetTop;
      var optionBottom = optionTop + activeItem.offsetHeight;

      if (scrollTop > optionTop || scrollBottom < optionBottom) {
        wrap.scrollTop = activeItem.offsetTop - 6;
      }
    };

    var toggleDropdown = function toggleDropdown() {
      var dropdown = elements.dropdown,
          trigger = elements.trigger,
          yearMenu = elements.yearMenu,
          monthMenu = elements.monthMenu;

      if (isOpen) {
        dropdown.classList.remove("is-active");
        trigger.classList.remove("is-open");
        isOpen = false;
      } else {
        dropdown.classList.add("is-active");
        trigger.classList.add("is-open");
        isOpen = true;
        scrollToOption(yearMenu);
        scrollToOption(monthMenu);
      }
    };

    var getYears = function getYears() {
      var _fp$config = fp.config,
          minDate = _fp$config.minDate,
          maxDate = _fp$config.maxDate;
      var yearRange = 20;

      if (minDate && !maxDate) {
        return (0, _lodash.range)(minDate.getFullYear(), minDate.getFullYear() + yearRange, 1);
      }

      if (!minDate && maxDate) {
        return (0, _lodash.range)(maxDate.getFullYear() - 20, maxDate.getFullYear() + 1, 1);
      }

      if (minDate && maxDate) {
        if (minDate.getFullYear() === maxDate.getFullYear()) {
          return [minDate.getFullYear()];
        }

        return (0, _lodash.range)(minDate.getFullYear(), maxDate.getFullYear() + 1, 1);
      }

      var localeYear = fp.now.getFullYear();
      return (0, _lodash.range)(localeYear - yearRange / 2, localeYear + yearRange / 2, 1);
    };

    var updateDropdownMenu = function updateDropdownMenu() {
      var currentYear = fp.currentYear,
          currentMonth = fp.currentMonth;
      var _fp$config2 = fp.config,
          minDate = _fp$config2.minDate,
          maxDate = _fp$config2.maxDate;
      var yearMenu = elements.yearMenu,
          monthMenu = elements.monthMenu;
      var yearItems = yearMenu.querySelectorAll(".dropdown-year-item") || [];
      yearItems.forEach(function (n) {
        n.classList.remove("is-active");

        if (Number(n.getAttribute("data-value")) === currentYear) {
          n.classList.add("is-active");
        }
      });
      var monthItems = monthMenu.querySelectorAll(".dropdown-month-item") || [];
      monthItems.forEach(function (n) {
        var val = Number(n.getAttribute("data-value"));
        n.classList.remove("is-active");
        n.classList.remove("disabled");

        if (val === currentMonth) {
          n.classList.add("is-active");
        }

        if (minDate && currentYear === minDate.getFullYear() && val < minDate.getMonth()) {
          n.classList.add("disabled");
        }

        if (maxDate && currentYear === maxDate.getFullYear() && val > maxDate.getMonth()) {
          n.classList.add("disabled");
        }
      });
    };

    var renderDropdown = function renderDropdown() {
      var l10n = fp.l10n;
      var dropdown = document.createElement("div");
      dropdown.setAttribute("class", "flatpickr-dropdown");
      elements.dropdown = dropdown;
      var yearMenu = document.createElement("div");
      yearMenu.setAttribute("class", "dropdown-year-menu");
      elements.yearMenu = yearMenu;
      var monthMenu = document.createElement("div");
      monthMenu.setAttribute("class", "dropdown-month-menu");
      elements.monthMenu = monthMenu;
      getYears().forEach(function (year) {
        var item = document.createElement("span");
        item.setAttribute("data-value", year);
        item.classList.add("dropdown-year-item");
        item.appendChild(document.createTextNode(year));
        yearMenu.appendChild(item);
      });
      var months = l10n.months.shorthand;
      months.forEach(function (month, index) {
        var item = document.createElement("span");
        item.setAttribute("data-value", index);
        item.classList.add("dropdown-month-item");
        item.appendChild(document.createTextNode(month));
        monthMenu.appendChild(item);
      });
      yearMenu.addEventListener("click", handleSelectYear);
      monthMenu.addEventListener("click", handleSelectMonth);
      dropdown.appendChild(yearMenu);
      dropdown.appendChild(monthMenu);
      dropdown.addEventListener("mouseleave", function () {
        if (isOpen) {
          toggleDropdown();
        }
      });
      updateDropdownMenu();
      return dropdown;
    };

    var getYearMonthString = function getYearMonthString() {
      var currentYear = fp.currentYear,
          currentMonth = fp.currentMonth,
          l10n = fp.l10n;
      return "".concat(currentYear).concat(l10n.yearAriaLabel, " ").concat(l10n.months.shorthand[currentMonth]);
    };

    var updateTrigger = function updateTrigger() {
      var trigger = elements.trigger;
      trigger.innerHTML = getYearMonthString();
      updateDropdownMenu();
    };

    return {
      onChange: function onChange() {
        isOpen = true;
        toggleDropdown();
      },
      onYearChange: function onYearChange() {
        updateTrigger();
      },
      onMonthChange: function onMonthChange() {
        updateTrigger();
      },
      onOpen: function onOpen() {
        isOpen = true;
        updateTrigger();
        toggleDropdown();
      },
      onReady: function onReady() {
        var title = fp.monthNav.querySelector(".flatpickr-month");
        var trigger = document.createElement("span");
        trigger.setAttribute("class", "flatpickr-header-year-month");
        trigger.appendChild(document.createTextNode(getYearMonthString()));
        title.innerHTML = "";
        trigger.addEventListener("click", toggleDropdown, false);
        fp.calendarContainer.addEventListener("click", function (e) {
          if (!isOpen || e.target === trigger) return;
          var closeDropdown = true;
          e.path.forEach(function (n) {
            if (n.classList && n.classList.contains("flatpickr-dropdown")) {
              closeDropdown = false;
            }
          });

          if (closeDropdown) {
            toggleDropdown();
          }
        }, false);
        title.appendChild(trigger);
        title.appendChild(renderDropdown());
        elements.trigger = trigger;
      }
    };
  };
};

var _default = customUI;
exports["default"] = _default;