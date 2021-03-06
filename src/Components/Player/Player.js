import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "./Player.css";

class Player extends React.Component {
	handlePlayer = () => {
		// if (this.props.toPause) {
		// 	this.player.audio.pause();
		// }
	};

	render() {
		return (
			<AudioPlayer
				ref={c => {
					this.player = c;
				}}
				toPause={this.handlePlayer()}
				autoPlayAfterSrcChange={false}
				src={this.props.src}
			/>
		);
	}
}

export default Player;