import { StaticImageData } from "next/image";
import menuicon from '@/img/menuIcon1.jpg'
import menu1 from '@/img/icons/menu1.svg'; import menu2 from '@/img/icons/menu2.svg';
import menu3 from '@/img/icons/menu3.svg'; import menu4 from '@/img/icons/menu4.svg'; 
import menu5 from '@/img/icons/menu5.svg'; import menu6 from '@/img/icons/menu6.svg';
import menu7 from '@/img/icons/menu7.svg'; import menu8 from '@/img/icons/menu8.svg';
import menu9 from '@/img/icons/menu9.svg'; import menu10 from '@/img/icons/menu10.svg';
import menu11 from '@/img/icons/menu11.svg'; import menu12 from '@/img/icons/menu12.svg';
import menu13 from '@/img/icons/menu13.svg'; import menu14 from '@/img/icons/menu14.svg';
import menu15 from '@/img/icons/menu15.svg'; import menu16 from '@/img/icons/menu16.svg';
import menu17 from '@/img/icons/menu17.svg'; import menu18 from '@/img/icons/menu18.svg';
import menu19 from '@/img/icons/menu19.svg'; import menu20 from '@/img/icons/menu20.svg';

export const ProductMenu = [
    {
        cat_id: '1127',
        name: 'დომენები & ჰოსტინგი',
        name_en: 'Domains & Hosting',
        type: 'hosting',
        mainLinks: [
            {
                name: 'დომენის რეგისტრაცია',
                name_en: 'დომენის რეგისტრაცია',
                desc: 'დომენური სახელების რეგისტრაცია',
                img: menu1,
                href: '',
            },
            {
                name: 'ჰოსტინგი',
                name_en: 'ჰოსტინგი',
                desc: 'ონლაინ პროექტის განთავსება რამდენიმე Click-ით',
                img: menu2,
                href: '',
            },
            {
                name: 'Wordpress',
                name_en: 'Wordpress',
                desc: 'Wordpress გვერდის განთავსება',
                img: menu3,
                href: '',
            },
            {
                name: 'Node.js',
                name_en: 'Node.js',
                desc: 'ინტერაქტიული, დინამიური საიტი',
                img: menu4,
                href: '',
            },
            {
                name: 'SSL სერთიფიკატები',
                name_en: 'SSL სერთიფიკატები',
                desc: 'ვებგვერდის ტრაფიკის დასაცავი სანდო სერთიფიკატები',
                img: menu5,
                href: '',
            },
            {
                name: 'DNS მენეჯმენტი',
                name_en: 'DNS მენეჯმენტი',
                desc: 'DNS ჩანაწერების მართვა',
                img: menu6,
                href: '',
            },
            {
                name: 'Cloud სერვერი',
                name_en: 'Cloud სერვერი',
                desc: 'გარანტირებული რესურსები ქლაუდში',
                img: menu7,
                href: '',
            },
        ],
        interestingLinks: [
            {
                name: 'დომენის ტრანსფერი',
                name_en: 'დომენის ტრანსფერი',
                desc: 'გადმოიტანე დომენი დაცულ დატა ცენტრში',
                img: menu8,
                href: '',
            },
            {
                name: 'დომენის წესები & ხელშეკრულება',
                name_en: 'დომენის წესები & ხელშეკრულება',
                desc: 'წესები და ხელშეკრულებები',
                img: menu9,
                href: '',
            },
            {
                name: 'რატომ დომენი ჩვენთან?',
                name_en: 'რატომ დომენი ჩვენთან?',
                desc: 'დაცული საერთაშორისო სტანდარტები',
                img: menu1,
                href: '',
            },
            {
                name: 'პერსონალურ მონაცემთა დაცვის პოლიტიკა',
                name_en: 'პერსონალურ მონაცემთა დაცვის პოლიტიკა',
                desc: '',
                img: menu10,
                href: '',
            },
        ]
    },
    {
        cat_id: '1128',
        name: 'Cloud',
        name_en: 'Cloud',
        type: 'hosting',
        mainLinks: [
            {
                name: 'VPS Cloud',
                name_en: 'VPS Cloud',
                desc: 'Linux/Windows სერვერი SSD-ზე',
                img: menu11,
                href: '',
            },
            {
                name: 'VPS Lite',
                name_en: 'VPS Lite',
                desc: 'ბიუჯეტური Linux/Windows სერვერი HDD-ზე',
                img: menu12,
                href: '',
            },
            {
                name: 'აპლიკაცია როგორც სერვისი',
                name_en: 'აპლიკაცია როგორც სერვისი',
                desc: 'Docker სისტემაზე დაფუძნებული სერვისი',
                img: menu13,
                href: '',
            },
            {
                name: 'მარტივი გამოყოფილი სივრცე',
                name_en: 'მარტივი გამოყოფილი სივრცე',
                desc: 'სივრცე ნებისმიერი ამოცანისთვის',
                img: menu14,
                href: '',
            },
            {
                name: 'Kubernetes',
                name_en: 'Kubernetes',
                desc: 'კონტეინერული აპლიკაციების დანერგვა',
                img: menu15,
                href: '',
            },
            {
                name: 'საჯარო Cloud',
                name_en: 'საჯარო Cloud',
                desc: 'პროექტი მაღალი წარმადობის Cloud ინფრასტრუქტურაში',
                img: menu16,
                href: '',
            },
        ],
        interestingLinks: [
            {
                name: 'კოლოკაცია',
                name_en: 'კოლოკაცია',
                desc: 'შენი სერვერი ჩვენს დატა ცენტრში',
                img: menu17,
                href: '',
            },
            {
                name: 'გამოყოფილი სერვერები',
                name_en: 'გამოყოფილი სერვერები',
                desc: 'მაღალი წარმადობის რესურსები',
                img: menu18,
                href: '',
            },
            {
                name: 'Backup სერვისი',
                name_en: 'Backup სერვისი',
                desc: 'სარეზერვო ასლების სამართავი სივრცე',
                img: menu19,
                href: '',
            },
            {
                name: 'NAS',
                name_en: 'NAS',
                desc: 'ნასი ჩვენ დატა ცენტრში',
                img: menu20,
                href: '',
            },
        ]
    },
    {
        cat_id: '1129',
        name: 'სერვისები',
        name_en: 'Services',
        type: 'services',
        mainLinks: []
    },
    {
        cat_id: '1130',
        name: 'მოდულები',
        name_en: 'Modules',
        type: 'modules',
        mainLinks: []
    },
    {
        cat_id: '1131',
        name: 'გადახდები',
        name_en: 'Payment',
        type: 'payment',
        mainLinks: []
    }
];

export interface IMenuLinks {
    name: string,
    name_en: string, 
    desc: string,
    img: StaticImageData,
    href: string
}

export interface IProdMenu {
    cat_id: string,
    name: string, 
    name_en: string,
    type: string, 
    mainLinks: IMenuLinks[],
    interestingLinks?: IMenuLinks[]
}
