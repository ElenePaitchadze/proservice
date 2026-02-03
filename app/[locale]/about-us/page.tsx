import styles from './page.module.css';
import aboutimg from '@/img/about.png';
import aboutimg1 from '@/img/about1.png';
import logo from '@/img/logo1.svg';
import cloud from '@/img/icons/cloud.svg';
import HeaderList from '@/components/HeaderList/HeaderList';
import Video from '@/components/Video/Video';

export default function AboutUs() {
  return (
    <>
      <section className={styles.head}>
        <div className={styles.imgCont}>
          <img src={aboutimg.src} alt="about image" />
          <img src={cloud.src} alt="cloud icon" />
        </div>
        <div className={styles.headtext}>
          <p>პროფესიონალური <b>Cloud სერვისები</b></p>
          <p>კომპანია <b>პროსერვისი</b> წარმოადგენს განვითარებაზე ორიენტირებულ მუდმივად მზარდი ტიპის კომპანიას.</p>
        </div>
      </section>
      <section className='Container aboutCont'>
        <div className='content1'>
          <div className={styles.about1}>
            <div className={styles.text1}>
              <span style={{ fontSize: '28px', lineHeight: '36px' }}>დღეისთვის Pro-Service ემსახურება <b>10 ათასზე მეტ ორგანიზაციასა და კერძო პირს.</b></span> <br /><br />
              Pro-Service 1999 წლიდან მოღვაწეობს და <b>ქართული ბაზრის ლიდერია</b> ინტერნეტ პროექტების  დაგეგმვისა და 
              განხორციელების სფეროში.
              მთელი ამ ხნის მანძილზე თამამად შეიძლება ითქვას, რომ კომპანია არ ღალატობს მის ძირითად პრინციპებს: <b>პროფესიონალიზმს , 
              პასუხისმგებლობას  და საქმის ერთგულებას.</b> <br /><br />
              კომპანიას თანამშრომლობის დიდი   გამოცდილება აქვს ,როგორც კორპორატიულ კლიენტებთან, ასევე პორტალური 
              ვებ გვერდების ავტორებთან. სწორედ მათი მრავალწლიანი ნდობა და ჩვენდამი ერთგული დამოკიდებულება 
              განსაზღვრავს კომპანია პროსერვისის რეპუტაციასა და იმიჯს. 
            </div>
            <div className={styles.aboutdecor1}>
              <img src={aboutimg1.src} alt="about image" />
              <img src={logo.src} alt="logo" />
            </div>
          </div>
          <div className={styles.about2}>
            <div className={styles.list}>
              <HeaderList />
            </div>
            <div className={styles.text2}>
              <h1>25+</h1>
              <h2>წლიანი გამოცდილება</h2>
              <h3>1999</h3>
              <p>
                შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, 
                რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, 
                როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი.
              </p>
              <h4></h4>
              <h3>2003</h3>
              <p>
                შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, 
                რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, 
                როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი.
              </p>
              <h4></h4>
              <h3>2019</h3>
              <p>
                შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, 
                რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, 
                როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი.
              </p>
              <h4></h4>
              <h3>მუდმივად <span style={{color: '#1492E6'}}>განვითარებაში</span></h3>
              <p>
                ჩვენ ვცდილობთ დავნერგოთ ახალი ტენდეციები და სიახლეები, რაც არა მარტო კომპანიის მომავალ განვითარებას 
                უწყობს ხელს, არამედ ბაზრის მზარდი მოთხოვნების უზრინველსაყოფადაა მომართული. 
              </p>
            </div>
          </div>
          <Video />
        </div>
      </section>
    </>
  );
}