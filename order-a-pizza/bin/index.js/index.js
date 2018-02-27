'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _protonNative = require('proton-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SIZE_OPTIONS = {
    0: 'Small',
    1: 'Medium',
    2: 'Large'
};

var TOPPING_OPTIONS = {
    0: 'Bacon',
    1: 'Pepperoni',
    2: 'Sausage'
};

var Example = function (_Component) {
    _inherits(Example, _Component);

    function Example(props) {
        _classCallCheck(this, Example);

        var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));

        _this._orderPizza = function () {
            console.log(_this.state.pizza);
        };

        _this._nameChanged = function (text) {
            _this.state.pizza.name = text;
        };

        _this._notesChanged = function (text) {
            _this.state.pizza.notes = text;
        };

        _this._sizeSelected = function (idx) {
            _this.state.pizza.size = SIZE_OPTIONS[idx];
        };

        _this._toppingSelected = function (idx) {
            _this.state.pizza.topping = TOPPING_OPTIONS[idx];
        };

        _this.state = {
            pizza: {
                name: '',
                notes: '',
                size: '',
                topping: ''
            }
        };
        return _this;
    }

    _createClass(Example, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _protonNative.App,
                null,
                _react2.default.createElement(
                    _protonNative.Menu,
                    { label: 'File' },
                    _react2.default.createElement(
                        _protonNative.Menu.Item,
                        { onClick: process.exit },
                        'Exit'
                    )
                ),
                _react2.default.createElement(
                    _protonNative.Window,
                    { margined: true, title: 'Order A Pizza', height: 300, width: 300 },
                    _react2.default.createElement(
                        _protonNative.Group,
                        { title: 'Order A Pizza', margined: true },
                        _react2.default.createElement(
                            _protonNative.Box,
                            { stretchy: false, padded: true },
                            _react2.default.createElement(
                                _protonNative.Form,
                                { padded: true },
                                _react2.default.createElement(_protonNative.TextInput, { onChange: this._nameChanged, stretchy: false, label: 'Name' }),
                                _react2.default.createElement(
                                    _protonNative.Picker,
                                    { onSelect: this._sizeSelected, stretchy: false, label: 'Size' },
                                    _react2.default.createElement(
                                        _protonNative.Picker.Item,
                                        null,
                                        'Small'
                                    ),
                                    _react2.default.createElement(
                                        _protonNative.Picker.Item,
                                        null,
                                        'Medium'
                                    ),
                                    _react2.default.createElement(
                                        _protonNative.Picker.Item,
                                        null,
                                        'Large'
                                    )
                                ),
                                _react2.default.createElement(
                                    _protonNative.Picker,
                                    { onSelect: this._toppingSelected, stretchy: false, label: 'Topping' },
                                    _react2.default.createElement(
                                        _protonNative.Picker.Item,
                                        null,
                                        'Bacon'
                                    ),
                                    _react2.default.createElement(
                                        _protonNative.Picker.Item,
                                        null,
                                        'Pepperoni'
                                    ),
                                    _react2.default.createElement(
                                        _protonNative.Picker.Item,
                                        null,
                                        'Sausage'
                                    )
                                ),
                                _react2.default.createElement(_protonNative.TextInput, { onChange: this._notesChanged, multiline: true, stretchy: true, label: 'Notes' })
                            ),
                            _react2.default.createElement(
                                _protonNative.Button,
                                { stretchy: false, onClick: this._orderPizza },
                                'Order Pizza'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Example;
}(_react.Component);

(0, _protonNative.render)(_react2.default.createElement(Example, null));