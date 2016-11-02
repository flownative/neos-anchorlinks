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
			return I18n.translate('Dimaip.Anchor:Main:' + this.get('buttonLabel'), 'Copy link');
		}.property('buttonLabel'),
		_showButton: function() {
			return this.get('inspector.nodeProperties.sectionId') ? true : false;
		}.property('inspector.nodeProperties.sectionId'),
		copyToClipboard: function () {
			var textArea = document.createElement('textarea');
			var link = 'node://' + this.get('inspector.nodeProperties._identifier') + '#' + this.get('inspector.nodeProperties.sectionId');
			textArea.innerText = link;
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand('copy');
			textArea.parentNode.removeChild(textArea);
			this.set('buttonLabel', 'copied');
		}
	});
});
