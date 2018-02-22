import React, {Component} from 'react';

import {
    render,
    Window,
    App,
    Button,
    TextInput,
    Menu,
    Box,
    Picker,
    Form
} from 'proton-native';

const SIZE_OPTIONS = {
    0: 'Small',
    1: 'Medium',
    2: 'Large'
};

const TOPPING_OPTIONS = {
    0: 'Bacon',
    1: 'Pepperoni',
    2: 'Sausage'
};

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pizza: {
                name: '',
                notes: '',
                size: '',
                topping: ''
            }
        };
    }

    _orderPizza = () => {
        console.log(this.state.pizza);
    }

    _nameChanged = (text) => {
        this.state.pizza.name = text;
    }

    _notesChanged = (text) => {
        this.state.pizza.notes = text;
    }

    _sizeSelected = (idx) => {
        this.state.pizza.size = SIZE_OPTIONS[idx];
    }

    _toppingSelected = (idx) => {
        this.state.pizza.topping = TOPPING_OPTIONS[idx];
    }

    render() {
        return (
            <App>
                <Menu label="File">
                    <Menu.Item onClicked={process.exit}>Exit</Menu.Item>
                </Menu>
                <Window margined={true} title="Order A Pizza" height={300} width={300}>
                    <Box stretchy={false} padded={true}>
                        <Form padded={true}>
                            <TextInput onChanged={this._nameChanged} stretchy={false} label="Name"/>
                            <Picker onSelected={this._sizeSelected} stretchy={false} label="Size">
                                <Picker.Item>Small</Picker.Item>
                                <Picker.Item>Medium</Picker.Item>
                                <Picker.Item>Large</Picker.Item>
                            </Picker>
                            <Picker onSelected={this._toppingSelected} stretchy={false} label="Topping">
                                <Picker.Item>Bacon</Picker.Item>
                                <Picker.Item>Pepperoni</Picker.Item>
                                <Picker.Item>Sausage</Picker.Item>
                            </Picker>
                            <TextInput onChanged={this._notesChanged} stretchy={true} multiline={true} label="Notes"/>
                        </Form>
                        <Button stretchy={false} onClicked={this._orderPizza}>
                            Order Pizza
                        </Button>
                    </Box>
                </Window>
            </App>
        );
    }
}

render(<Example/>);