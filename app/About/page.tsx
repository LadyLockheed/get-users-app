"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.aboutTextContainer}>
        <p className={styles.aboutText}>
          <h3>Hi there!</h3>
          <br />
          Who am I who has created this small app? I am a junior frontend
          developer. And this app started with me getting a coding test. The
          criterias was: <br />
          * A button that gets a random user <br />
          * Display a loading indicator <br />
          * Display a indicator if something is went wrong <br />
          * Display info about the user <br />
          So, what happend? <br />
          I started with no plan at all, which is evident in my commit messages.
          But then the idea appeared about a gameboy classic. If I had known
          from the start what I wanted to do, the file structure and commit
          messages would have looked completely different. I also took the
          opportunity to try a new framework for me, NextJS. I had not practiced
          much with css either, but now I got a chance to play around a bit. The
          hardest thing has been trying limiting what I wanted to try and do.
          For example I wanted to use React Context as global state management.
          And there is a lot I want to change in the app. <br />
          But all in all, it was great fun to build! <br />
        </p>
      </div>

      <button onClick={() => router.back()} className={styles.returnButton}>
        <Image src="/return.png" alt="Go back button" width={40} height={40} />
      </button>
    </>
  );
};

export default About;
