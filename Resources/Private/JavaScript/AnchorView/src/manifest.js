import manifest from '@neos-project/neos-ui-extensibility';
import AnchorView from './AnchorView';

manifest('Flownative.AnchorLinks:AnchorView', {}, globalRegistry => {
    const viewsRegistry = globalRegistry.get('inspector').get('views');

    viewsRegistry.set('Flownative.Anchorlinks/Views/AnchorView', {
        component: AnchorView,
        hasOwnLabel: true
    });
});
