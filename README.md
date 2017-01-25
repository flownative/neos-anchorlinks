# Flownative.Anchorlinks

Create anchor links to any content element on the page.

## Setup

```
composer require 'flownative/anchorlinks'
```

Add the `Flownative.Anchorlinks:AnchorMixin` mixin to any nodetype that you would want to link to.

E.g. this code will add such ability to every Content nodetype:

```yaml
'Neos.Neos:Content':
  superTypes:
    'Flownative.Anchorlinks:AnchorMixin': true
```

Add the `Flownative.Anchorlinks:AnchorWrapper` processor to the same nodetype renderer to insert an anchor tag with the given id before it.

E.g.:

```
prototype(Neos.Neos:Content) {
    @process.prependAnchor = Flownative.Anchorlinks:AnchorWrapper
}
```

## Usage

Choose some content node that you would like to link to, and fill in the `sectionId` property in the inspector.

After that you will see a button appear below the field to copy the link to this node to the clipboard.

When you click that button, the link to the given node will be copied to the clipboard. Paste it in the "insert link" field in Aloha editor and you are done!
