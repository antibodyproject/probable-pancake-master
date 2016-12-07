using UnityEngine;

using System.Collections;




[RequireComponent(typeof(AudioSource))]

public class WaitPSO : MonoBehaviour

{
    public float delay;
    public AudioClip otherClip;




    IEnumerator Start()

    {
        AudioSource audio = GetComponent<AudioSource>();


        yield return new WaitForSeconds(delay);
        audio.Play();



    }

}
