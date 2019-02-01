import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from '@neos-project/react-ui-components';
import {connect} from 'react-redux';
import {selectors} from '@neos-project/neos-ui-redux-store';
import I18n from '@neos-project/neos-ui-i18n';
import {$get} from 'plow-js';

@connect(state => ({
    documentNode: selectors.CR.Nodes.documentNodeSelector(state),
    focusedNode: selectors.CR.Nodes.focusedSelector(state),
    transientSectionId: $get('sectionId.value', selectors.UI.Inspector.transientValues(state))
}))
export default class AnchorView extends Component {
    static propTypes = {
        focusedNode: PropTypes.object,
        documentNode: PropTypes.object,
        transientSectionId: PropTypes.string
    };

    state = {
        isCopied: false
    };

    getSetionId = () => this.props.transientSectionId || $get('properties.sectionId', this.props.focusedNode)

    copyToClipboard = () => {
        const documentNodeIdentifier = $get('identifier', this.props.documentNode);
        const link = 'node://' + documentNodeIdentifier + '#' + this.getSetionId();
        const textArea = document.createElement('textarea');
        textArea.innerText = link;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.parentNode.removeChild(textArea);
        this.setState({isCopied: true});
    };

    render() {
        return this.getSetionId() && (
            <Button style="brand" onClick={this.copyToClipboard}>
                <I18n
                    id={`Flownative.Anchorlinks:Main:${this.state.isCopied ? 'copied' : 'copy'}`}
                    fallback="Copy link"
                    />
                <div style={{
                    display: 'inline-block',
                    width: '16px',
                    height: '16px',
                    fill: 'white',
                    marginLeft: '3px',
                    verticalAlign: 'sub'
                }}>
                    <svg viewBox="0 0 896 1024" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M128 768h256v64H128v-64z m320-384H128v64h320v-64z m128 192V448L384 640l192 192V704h320V576H576z m-288-64H128v64h160v-64zM128 704h160v-64H128v64z m576 64h64v128c-1 18-7 33-19 45s-27 18-45 19H64c-35 0-64-29-64-64V192c0-35 29-64 64-64h192C256 57 313 0 384 0s128 57 128 128h192c35 0 64 29 64 64v320h-64V320H64v576h640V768zM128 256h512c0-35-29-64-64-64h-64c-35 0-64-29-64-64s-29-64-64-64-64 29-64 64-29 64-64 64h-64c-35 0-64 29-64 64z" />
                    </svg>
                </div>
            </Button>
        );
    }
}
