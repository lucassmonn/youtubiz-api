const ytdl = require('ytdl-core')
const filenamify = require('filenamify')

class YoutubeController {
    mp4(req, res) {
        var URL = req.query.URL;
        ytdl.getBasicInfo(URL).then(video => {
            var title = filenamify(video.videoDetails.title) + '.mp4'

            res.header('Content-Disposition', 'attachment; filename="' + title);
            ytdl(URL, {
                format: 'mp4',
                quality: '18'
            }).pipe(res);
        })
    }

    mp3(req, res) {
        var URL = req.query.URL;

        ytdl.getBasicInfo(URL).then(video => {
            var title = filenamify(video.videoDetails.title) + '.mp3'

            res.header('Content-Disposition', 'attachment; filename="' + title);
            ytdl(URL, {
                format: 'mp3'
            }).pipe(res);
        })
    }
}

module.exports = new YoutubeController()