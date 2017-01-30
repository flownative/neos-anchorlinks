define([
    'emberjs',
    'text!./AnchorView.html',
    'Shared/I18n'
],
function(
    Ember,
    template,
    I18n
) {
    return Ember.View.extend({
        template: Ember.Handlebars.compile(template),
        buttonLabel: 'copy',
        _buttonLabel: function() {
            return I18n.translate('Flownative.Anchorlinks:Main:' + this.get('buttonLabel'), 'Copy link');
        }.property('buttonLabel'),
        _showButton: function() {
            return !!this.get('inspector.nodeProperties.sectionId');
        }.property('inspector.nodeProperties.sectionId'),
        copyToClipboard: function () {
            var documentNodeIdentifier = document.getElementById('neos-document-metadata').dataset['node-_identifier'];
            var link = 'node://' + documentNodeIdentifier + '#' + this.get('inspector.nodeProperties.sectionId');
            var textArea = document.createElement('textarea');
            textArea.innerText = link;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            textArea.parentNode.removeChild(textArea);
            this.set('buttonLabel', 'copied');
        }
    });
});
