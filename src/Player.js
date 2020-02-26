import React, { Component } from 'react'
import Hls from 'hls.js'

class Player extends Component {
    constructor(props) {
        super(props)
        this.player = React.createRef()
    }

    componentDidMount() {
        const player = this.player.current

        if (Hls.isSupported()) {
            var hls = new Hls()
            hls.loadSource(
                'https://tf1-hls-live-ssl.tf1.fr/tf1/1/hls/master_3000000.m3u8?e=1582825839&st=xBFjGVjgOPh-fqOkgiU95g#t=undefined'
            )
            hls.attachMedia(player)
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                player.play()
            })
        } else {
            console.log('HLS not supported')
        }
    }

    render() {
        return <video ref={this.player} className="h-screen"></video>
    }
}

export default Player
