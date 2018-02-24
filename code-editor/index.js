import React, {Component} from 'react';

import {
    render,
    Window,
    App,
    TextInput,
    Menu,
    Form
} from 'proton-native';


class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _inputChanged = (event) => {

    }

    render() {
        return (
            <App>
                <Menu label="File">
                    <Menu.Item onClicked={process.exit}>Open</Menu.Item>
                    <Menu.Item onClicked={process.exit}>Save</Menu.Item>
                    <Menu.Item onClicked={process.exit}>Exit</Menu.Item>
                </Menu>
                <Menu label="Edit">
                    <Menu.Item onClicked={process.exit}>Undo</Menu.Item>
                    <Menu.Item onClicked={process.exit}>Redo</Menu.Item>
                 </Menu>
                <Menu label="Preferences">
                    <Menu.Item onClicked={process.exit}>Light Theme</Menu.Item>
                    <Menu.Item onClicked={process.exit}>Dark Theme</Menu.Item>
                </Menu>
                <Window title="Code Editor" height={300} width={1200}>
                    <Box stretchy={false} padded={true}>
                        <Form>
                            <TextInput onChanged={this._inputChanged} stretchy={true} multiline={true}/>
                        </Form>
                    </Box>
                </Window>
            </App>
        );
    }
}

render(<Example/>);