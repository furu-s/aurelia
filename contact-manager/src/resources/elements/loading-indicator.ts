import * as nprogress from 'nprogress';
import {bindable, noView, PLATFORM} from 'aurelia-framework';
import 'nprogress/nprogress.css';

@noView // loading-indicator.htmlを読み込みにいかないようにする。

export class LoadingIndicator{
    @bindable loading = false;

    loadingChanged(newValue) {
        if (newValue) {
            nprogress.start();
        } else {
            nprogress.done();
        }
    }
}