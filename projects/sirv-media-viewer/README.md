# Angular Sirv Media Viewer

Easy to use, highly customizable Angular Sirv Media Viewer library.

Copy and paste this script anywhere in your HTML, usually before ```</head>```
```
<script src="https://scripts.sirv.com/sirvjs/v3/sirv.js"></script>
```

## install
```
npm install an-sirv-media-viewer
```
## register as plugin
```
import { SirvMediaViewerModule } from 'sirv-media-viewer';

@NgModule({
    declarations: [ ... ],
    imports: [ SirvMediaViewerModule ],
    providers: [...],
    bootstrap: [ ... ]
})
```
## basic usage
```
<sirv-media-viewer
    id='...'
    data-src='...'
    data-options="fullscreen.enable:false;"
    [slides]="[
        'https://demo.sirv.com/demo/snug/teal-b-throw.jpg',
        'https://demo.sirv.com/demo/snug/teal.spin',
        {
            src: 'https://demo.sirv.com/demo/snug/unpacked.jpg',
            type: 'image'
        }
    ]"
></sirv-media-viewer>
```
- `id` - viewer id
- `data-src` - using for `*.view` files, overrides `:slides`
- `data-options` - [viewer options](https://sirv.com/help/articles/sirv-media-viewer/)
- `[slides]` - Array with slide sources. Sources can be String or Object.
String can be just url link
Object has additional props:
  * `id` - Slide id [String]
  * `src` - Source [String]
  * `dataOptions` - Local slide options [Object]
  * `type` - Type of slide [String]. The available props are: `spin`, `zoom`, `image`, `youtube`, `vimeo`, `video`, `html`
  * `dataThumbnailImage` - Custom thumbnail image [String]
  * `dataThumbnailHtml` - Custom thumbnail html [String]
  * `dataDisabled` - Disable slide [Boolean]
  * `dataSwipeDisabled` - Disable slide swipe [Boolean]
  * `dataHiddenSelector` - Hide selector [Boolean]
  * `dataPinned` - Pinned selector [String]. The available props are: `left`, `right`
  * `staticImage` - Static image [Boolean].

[Examples](https://test1.sirv.com)

[Sirv Media Viewer documentation](https://sirv.com/help/articles/sirv-media-viewer/)