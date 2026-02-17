'use client';
import { useState, useRef } from 'react';
import styles from './page.module.css';

const questions = [
  { id: '1', name: 'დისკური სივრცის ზომა.' },
  { id: '2', name: 'FTP დაშვება, email, მონაცემთა ბაზები, სკრიპტები.' },
  { id: '3', name: 'დისკური სივრცის ზომა.' },
  { id: '4', name: 'FTP დაშვება, email, მონაცემთა ბაზები, სკრიპტები.' },
  { id: '5', name: 'დისკური სივრცის ზომა.' },
  { id: '6', name: 'დისკური სივრცის ზომა.' },
  { id: '7', name: 'დისკური სივრცის ზომა.' },
  { id: '8', name: 'დისკური სივრცის ზომა.' },
  { id: '9', name: 'დისკური სივრცის ზომა.' },
  { id: '10', name: 'დისკური სივრცის ზომა.' },
];

export default function TenQuestions() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setActiveIndex(prev => prev === index ? null : index);
  };

  return (
    <section className={`Container ${styles.questionsCont}`}>
      <div className='content1'>
        <p className='pageTitle'>10 კითხვა ჰოსტინგისათვის</p>
        <div className={styles.faq}>
          {questions.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={item.id} className={`${styles.faqItem} ${isOpen ? styles.show : ''}`}>
                <div className={styles.question} onClick={() => toggle(index)}>
                  <div className={styles.plus}>
                    <div></div>
                    <div></div>
                  </div>
                  <p>{item.name}</p>
                </div>
                <div className={styles.answer}
                  style={{
                    height: isOpen
                      ? contentRefs.current[index]?.scrollHeight + 'px'
                      : '0px'
                  }}>
                  <div className={styles.answerContent}
                    ref={(el) => { contentRefs.current[index] = el; }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ad reprehenderit omnis totam 
                    tempore iste suscipit provident rem dolorum, expedita nam modi quibusdam magni ut vel fugit, 
                    aperiam delectus cum? <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus incidunt sed 
                    aliquam iure veniam praesentium nam, aspernatur eum temporibus quos qui molestias beatae 
                    quam fuga quis suscipit. Nisi, voluptas! <br /><br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis rem accusantium 
                    iure non modi praesentium consequuntur, tempore, quisquam harum blanditiis repudiandae 
                    optio placeat. Ipsa voluptatum eum accusamus quis facere similique.
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
