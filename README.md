# Dimaip.Anchor

Create anchor links to any content element on the page.

## Setup

```
composer require 'dimaip/anchor:@dev'
```

Add `Dimaip.Anchor:AnchorMixin` mixin to any nodetype that you would want to link to.

E.g. this code will add such ability to every Content nodetype:

```
'TYPO3.Neos:Content':
  superTypes:
    'Dimaip.Anchor:AnchorMixin': true
```

Add `Dimaip.Anchor:AnchorWrapper` processor to the same nodetype renderer to insert anchor tag with given id before it.

E.g.:

```
prototype(TYPO3.Neos:Content) {
	@process.appendAnchor = Dimaip.Anchor:AnchorWrapper
}
```

## Usage

Choose some content node that you would like to link to, and fill in `sectionId` inspector property.

After that you would see a button appear below to copy link to this node to clipboard.

When you click that button, the link to the given node will be copied to the clipboard. Paste it in insert link field in Aloha editor and you are done!
