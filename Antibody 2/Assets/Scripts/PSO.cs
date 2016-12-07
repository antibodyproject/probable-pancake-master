﻿using UnityEngine;

using System.Collections;




[RequireComponent(typeof(AudioSource))]

public class PSO : MonoBehaviour

{

    public AudioClip otherClip;




    IEnumerator OnTriggerEnter()

    {

        AudioSource audio = GetComponent<AudioSource>();



        audio.Play();

        yield return new WaitForSeconds(audio.clip.length);

    }

}
