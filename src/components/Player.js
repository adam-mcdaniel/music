import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { playAudio } from "../util"

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
}) => {
  const getTime = time => {
    // If the time is above the song duration, set the player to be over
    console.log("Getting time: ", songInfo.currentTime, "...")
    if (
      isPlaying &&
      audioRef.current.currentTime >= audioRef.current.duration
    ) {
      // console.log("Time is over the song duration: ", time, " > ", songInfo.duration, "...");
      setIsPlaying(false)
    }

    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
  }

  const activeLibraryHandler = nextPrev => {
    setSongs(
      songs.map(targetSong => {
        return {
          ...targetSong,
          active: targetSong.id === nextPrev.id,
        }
      })
    )
  }

  // Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      if (audioRef.current.currentTime >= audioRef.current.duration) {
        audioRef.current.currentTime = 0
      }
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  const dragHandler = e => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }

  const skipTrackHandler = async direction => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id)
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length])
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
    }
    if (direction === "skip-reverse") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1])
        activeLibraryHandler(songs[songs.length - 1])
        playAudio(isPlaying, audioRef)
        return
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length])
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
    }
    playAudio(isPlaying, audioRef)
  }

  return (
    <StyledPlayer className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-reverse")}
          className="skip-reverse"
          size="2x"
          icon={faBackward}
          title="reverse"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          title={isPlaying ? "pause" : "play"}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faForward}
          // icon={['fas', 'angle-right']}
          title="forward"
        />
      </div>
    </StyledPlayer>
  )
}

const StyledPlayer = styled.div`
  width: 100%;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .time-control {
    width: 50%;
    display: flex;
    input {
      width: 100%;
      padding: 1rem 0;
      cursor: pointer;
    }
    p {
      padding: 1rem;
    }
  }
  .play-control {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0em 3.5em 1em;
    svg {
      cursor: pointer;
    }
  }
`

export default Player
