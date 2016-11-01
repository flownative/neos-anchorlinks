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
			textArea.innerText = this.get('inspector.nodeProperties.sectionId');
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand('copy');
			textArea.parentNode.removeChild(textArea);
			this.set('buttonLabel', 'copied');
		}
	});
});
