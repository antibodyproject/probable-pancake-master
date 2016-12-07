var sound : AudioClip;

function Start () {
    if (!AudioClip.isPlaying) {
        AudioSource.PlayClipAtPoint(sound, transform.position);
    }
}