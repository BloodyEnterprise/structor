/*
 * Copyright 2015 Alexander Pustovalov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Component, PropTypes } from 'react';

import {
    Button
} from 'react-bootstrap';

class FormMessage extends Component {

    constructor(props) {
        super(props);
    }

    handleBackStep(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.props.onBackStep) {
            this.props.onBackStep();
        }
    }

    handleSubmitStep(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.props.onSubmitStep) {
            this.props.onSubmitStep();
        }
    }

    render() {
        return (
            <div style={this.props.formStyle}>
                <table style={{width: '100%'}}>
                    <tbody>
                    <tr>
                        <td style={{width: '20%'}}></td>
                        <td style={{height: '100%', verticalAlign: 'middle'}}>
                            <p>{this.props.message}</p>
                        </td>
                        <td style={{width: '20%'}}></td>
                    </tr>
                    <tr>
                        <td colSpan='3'></td>
                    </tr>
                    </tbody>
                </table>
                <div style={{display: 'table', textAlign: 'center', width: '100%', marginTop: '2em'}}>
                    {/*<Button bsStyle='default' onClick={this._handleBackStep}>Back</Button>*/}
                    {/*<Button bsStyle='primary' onClick={this.handleSubmitStep}>Next</Button>*/}
                </div>
            </div>
        );
    }

}

export default FormMessage;
