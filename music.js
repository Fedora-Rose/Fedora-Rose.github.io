var audio = new Audio('/media/unravel.mp3');
const current_song_text = document.getElementById('current_song')


const play_music = (music) => {

    audio.pause()
    audio = new Audio('/media/' + music + '.mp3')
    current_song_text.innerHTML = music
    audio.play()

    
}

