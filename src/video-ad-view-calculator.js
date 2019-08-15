import {dataSets} from './data-layer.js';
import {AdType} from "./enums";

export class VideoAdViewCalculator {

    constructor(sessionId) {
        this.sessionId = sessionId;
        this.adType = AdType.Video;
        this.samples = [];
    }

    addSample(adSample) {
        this.samples.push(adSample);
    }

    _isVideoPlayingAt(sampleIndex) {
        let videoIsPlaying = false;
        for (let i = 0; i < this.samples.length && i <= sampleIndex; i++) {
            if (this.samples[i].playClicked) {
                videoIsPlaying = !videoIsPlaying;
            }
        }

        return videoIsPlaying;
    }

    _calculateVideoPlayed() {
        for (let i = 0; i < this.samples.length; i++) {
            let sample = this.samples[i];
            if (sample.playClicked) {
                return true;
            }
        }
        return false;
    }

    _calculateMaxViewedSamples() {
        let viewedConsecutive = 0;
        let maxViewedSamples = 0;
        for (let i = 0; i < this.samples.length; i++) {
            let sample = this.samples[i];
            if (sample.percentageInView > 50 && this._isVideoPlayingAt(i)) {
                viewedConsecutive++;
            } else {
                if (viewedConsecutive > maxViewedSamples) {
                    maxViewedSamples = viewedConsecutive;
                }
                viewedConsecutive = 0;
            }
        }
        return maxViewedSamples;
    }

    reportEndSession() {
        dataSets.sessionData.insertSession({
            sessionId: this.sessionId,
            adType: this.adType,
            videoPlayed: this._calculateVideoPlayed(),
            maxViewedSamples: this._calculateMaxViewedSamples()
        });
    }
}
