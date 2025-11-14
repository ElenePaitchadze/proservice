import { StaticImageData } from "next/image";
import menuicon from '@/img/menuIcon1.jpg';

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
                img: menuicon,
                href: '',
            },
            {
                name: 'ჰოსტინგი',
                name_en: 'ჰოსტინგი',
                desc: 'ონლაინ პროექტის განთავსება რამდენიმე Click-ით',
                img: menuicon,
                href: '',
            },
            {
                name: 'Wordpress',
                name_en: 'Wordpress',
                desc: 'Wordpress გვერდის განთავსება',
                img: menuicon,
                href: '',
            },
            {
                name: 'Node.js',
                name_en: 'Node.js',
                desc: 'ინტერაქტიული, დინამიური საიტი',
                img: menuicon,
                href: '',
            },
            {
                name: 'SSL სერთიფიკატები',
                name_en: 'SSL სერთიფიკატები',
                desc: 'ვებგვერდის ტრაფიკის დასაცავი სანდო სერთიფიკატები',
                img: menuicon,
                href: '',
            },
            {
                name: 'DNS მენეჯმენტი',
                name_en: 'DNS მენეჯმენტი',
                desc: 'DNS ჩანაწერების მართვა',
                img: menuicon,
                href: '',
            },
            {
                name: 'Cloud სერვერი',
                name_en: 'Cloud სერვერი',
                desc: 'გარანტირებული რესურსები ქლაუდში',
                img: menuicon,
                href: '',
            },
        ],
        interestingLinks: [
            {
                name: 'დომენის ტრანსფერი',
                name_en: 'დომენის ტრანსფერი',
                desc: 'გადმოიტანე დომენი დაცულ დატა ცენტრში',
                img: menuicon,
                href: '',
            },
            {
                name: 'დომენის წესები & ხელშეკრულება',
                name_en: 'დომენის წესები & ხელშეკრულება',
                desc: 'წესები და ხელშეკრულებები',
                img: menuicon,
                href: '',
            },
            {
                name: 'რატომ დომენი ჩვენთან?',
                name_en: 'რატომ დომენი ჩვენთან?',
                desc: 'დაცული საერთაშორისო სტანდარტები',
                img: menuicon,
                href: '',
            },
            {
                name: 'პერსონალურ მონაცემთა დაცვის პოლიტიკა',
                name_en: 'პერსონალურ მონაცემთა დაცვის პოლიტიკა',
                desc: '',
                img: menuicon,
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
                img: menuicon,
                href: '',
            },
            {
                name: 'VPS Lite',
                name_en: 'VPS Lite',
                desc: 'ბიუჯეტური Linux/Windows სერვერი HDD-ზე',
                img: menuicon,
                href: '',
            },
            {
                name: 'აპლიკაცია როგორც სერვისი',
                name_en: 'აპლიკაცია როგორც სერვისი',
                desc: 'Docker სისტემაზე დაფუძნებული სერვისი',
                img: menuicon,
                href: '',
            },
            {
                name: 'მარტივი გამოყოფილი სივრცე',
                name_en: 'მარტივი გამოყოფილი სივრცე',
                desc: 'სივრცე ნებისმიერი ამოცანისთვის',
                img: menuicon,
                href: '',
            },
            {
                name: 'Kubernetes',
                name_en: 'Kubernetes',
                desc: 'კონტეინერული აპლიკაციების დანერგვა',
                img: menuicon,
                href: '',
            },
            {
                name: 'საჯარო Cloud',
                name_en: 'საჯარო Cloud',
                desc: 'პროექტი მაღალი წარმადობის Cloud ინფრასტრუქტურაში',
                img: menuicon,
                href: '',
            },
        ],
        interestingLinks: [
            {
                name: 'კოლოკაცია',
                name_en: 'კოლოკაცია',
                desc: 'შენი სერვერი ჩვენს დატა ცენტრში',
                img: menuicon,
                href: '',
            },
            {
                name: 'გამოყოფილი სერვერები',
                name_en: 'გამოყოფილი სერვერები',
                desc: 'მაღალი წარმადობის რესურსები',
                img: menuicon,
                href: '',
            },
            {
                name: 'Backup სერვისი',
                name_en: 'Backup სერვისი',
                desc: 'სარეზერვო ასლების სამართავი სივრცე',
                img: menuicon,
                href: '',
            },
            {
                name: 'NAS',
                name_en: 'NAS',
                desc: '',
                img: menuicon,
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
