'use client';
import { useState } from 'react';
import styles from './video.module.css';

export default function Video() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      {open && (
        <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setOpen(false)}>✕</button>
            <div className={styles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/EZnuCcmeEiA?si=toGp61Yr4BEPZGzP" title="YouTube video player" allowFullScreen={true}></iframe>
            </div>
          </div>
        </div>
      )}

      <div className={styles.companyVideo}>
        <div className={styles.text}>
          კომპანიის ძირითადი ბირთვი <b>მაღალკვალიფიციურ პროფესინალთა გუნდია</b>, რომელიც თავის მომხმარებლებს 
          <b>მხოლოდ მაღალ ტექნოლოგიურ და ადმინისტრაციულ ბაზაზე დაფუძნებულ მაღალხარისხიან მომსახურებას სთავაზობს.</b> 
          ესაა შეკრული პროფესიონალთა ჯგუფი, რომელიც უმაღლეს დონეზე ასრულებს ნებისმიერი სირთულის პროექტს და ამოცანას.
          <br /><br />
          <span style={{color: '#D12528', fontFamily: 'Helvetica Bold'}}>Pro</span><span style={{fontFamily: 'Helvetica Bold'}}>-Service</span> მომხმარებლის ინტერესებზე მომართული კომპანიაა, რომლის პრიორიტეტია პროფესიონალურ დონეზე მართოს 
          საკუთარი სერვისი, დააკმაყოფილოს კლიენტებისა და პარტნიორების მზარდი მოლოდინი.
          <br /><br />
          ჩვენი მიზანია, მზარდი ბიზნესის გარემოშიც კი მაქსიმალურად დავაკმაყოფილოთ მომხმარებლის ინტერესები. შექვმნათ 
          ბაზრისთვის და კლიენტებისთვის ისეთი პირობები რაც ხელს შეუწყობს მთლიანად ინტერნეტ სფეროს განვითარებას. 
        </div>
        <div className={styles.videoBtn}>
          <button onClick={() => setOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22.314" height="28.426" viewBox="0 0 22.314 28.426">
                <g>
                  <g>
                    <path d="M440.72,583.733l-19.267-12.417c-1.143-.616-2.452-.552-2.452,1.658v24.451c0,2.02,1.4,2.339,2.452,1.658l19.267-12.417a2.105,2.105,0,0,0,0-2.933" transform="translate(-419 -570.981)" />
                  </g>
                </g>
              </svg>   
          </button>
          <p>ვიდეო <span>კომპანიის შესახებ</span></p>
        </div>
      </div>
    </>
  );
}