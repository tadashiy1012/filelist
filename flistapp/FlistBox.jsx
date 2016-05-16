import React from 'react';
import Flist from './Flist.jsx';

const remote = window.require('electron').remote;

export default class FlistBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [
                {name: 'file1'},
                {name: 'file2'},
                {name: 'file3'}
            ]
        };
    }
    handleOpenFolder() {
        remote.require('./mapFilelist')((arg) => {
            console.log(arg);
            const files = arg.map((file) => {
                return {name: file};
            });
            this.setState({files: files});
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleOpenFolder.bind(this)}>open folder</button>
                <br />
                <Flist files={this.state.files}/>
            </div>
        );
    }
}