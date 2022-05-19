import SMV from '../projects/sirv-media-viewer/src/lib/interfaces/SMV';

declare global {
    interface Window {
        Sirv: SMV
    }

}
