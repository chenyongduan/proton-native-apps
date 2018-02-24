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


class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
        return (
            <App>
                <Menu label="File">
                    <Menu.Item onClicked={process.exit}>Open</Menu.Item>
                    <Menu.Item onClicked={process.exit}>Save</Menu.Item>
                    <Menu.Item onClicked={process.exit}>Exit</Menu.Item>
                </Menu>
                <Window margined={true} title="Order A Pizza" height={300} width={500}>
                    <Box stretchy={false} padded={true}>
                        <Form padded={true}>
                            <TextInput onChanged={this._notesChanged} stretchy={true} multiline={true} label="Notes"/>
                        </Form>
                    </Box>
                </Window>
            </App>
        );
    }
}

render(<Example/>);