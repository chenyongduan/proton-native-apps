import React, {Component} from 'react';

import {
    render,
    Window,
    App,
    TextInput,
    Menu,
    Form,
    Dialog,
    Button,Box,Group,Tab 
} from 'proton-native';


class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {key: 0,label: 'untitled'}
            ]
        };
    }

    _inputChanged = (event) => {

    }

    _addTab = (event) => {
        let tabs = this.state.tabs;
        tabs.push({key: 1, label: 'untitled'});
        this.setState({ tabs: tabs });
    }

    render() {
        return (
            <App>
            <Menu label="File">
                    <Menu.Item onClick={process.exit}>Open</Menu.Item>
                    <Menu.Item onClick={process.exit}>Save</Menu.Item>
                    <Menu.Item onClick={this._addTab}>New Tab</Menu.Item>
                    <Menu.Item onClick={process.exit}>Exit</Menu.Item>
                </Menu>
                <Menu label="Edit">
                    <Menu.Item onClick={process.exit}>Undo</Menu.Item>
                    <Menu.Item onClick={process.exit}>Redo</Menu.Item>
                 </Menu>
                <Window title="Code Editor" size={{h:600,w:800}}>
                    <Form>
                        <Tab>
                        {
                            this.state.tabs.map((tab) => <TextInput key={tab.key} stretchy={true} multiline={true} onChange={this._inputChanged} label="untitled" />)
                        }
                        </Tab>
                    </Form>
                </Window>
            </App>
        );
    }
}

render(<Example/>);
