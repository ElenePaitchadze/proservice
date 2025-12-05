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
                href: 'https://billing.proservice.ge/cart.php?a=add&domain=register',
                soon: false,
            },
            {
                name: 'ჰოსტინგი',
                name_en: 'ჰოსტინგი',
                desc: 'ონლაინ პროექტის განთავსება რამდენიმე Click-ით',
                img: menu2,
                href: 'https://billing.proservice.ge/index.php?rp=/store/shared-hosting',
                soon: false,
            },
            {
                name: 'Wordpress',
                name_en: 'Wordpress',
                desc: 'Wordpress გვერდის განთავსება',
                img: menu3,
                href: 'https://billing.proservice.ge/index.php?rp=/store/wordpress-hosting',
                soon: false,
            },
            {
                name: 'Node.js',
                name_en: 'Node.js',
                desc: 'ინტერაქტიული, დინამიური საიტი',
                img: menu4,
                href: '',
                soon: false,
            },
            {
                name: 'SSL სერთიფიკატები',
                name_en: 'SSL სერთიფიკატები',
                desc: 'ვებგვერდის ტრაფიკის დასაცავი სანდო სერთიფიკატები',
                img: menu5,
                href: 'https://billing.proservice.ge/index.php?rp=/store/ssl-certificate',
                soon: false,
            },
            {
                name: 'DNS მენეჯმენტი',
                name_en: 'DNS მენეჯმენტი',
                desc: 'DNS ჩანაწერების მართვა',
                img: menu6,
                href: 'https://billing.proservice.ge/cart.php?a=add&pid=47',
                soon: false,
            },
            {
                name: 'Cloud სერვერი',
                name_en: 'Cloud სერვერი',
                desc: 'გარანტირებული რესურსები ქლაუდში',
                img: menu7,
                href: 'https://billing.proservice.ge/index.php?rp=/store/dedicated-servers',
                soon: false,
            },
        ],
        interestingLinks: [
            {
                name: 'დომენის ტრანსფერი',
                name_en: 'დომენის ტრანსფერი',
                desc: 'გადმოიტანე დომენი დაცულ დატა ცენტრში',
                img: menu8,
                href: 'https://billing.proservice.ge/cart.php?a=add&domain=transfer',
                soon: false,
            },
            {
                name: 'დომენის წესები & ხელშეკრულება',
                name_en: 'დომენის წესები & ხელშეკრულება',
                desc: 'წესები და ხელშეკრულებები',
                img: menu9,
                href: 'https://proservice.ge/uploads/xelshekrulebebi/xelshekruleba_domeni.pdf',
                soon: false,
            },
            {
                name: 'რატომ დომენი ჩვენთან?',
                name_en: 'რატომ დომენი ჩვენთან?',
                desc: 'დაცული საერთაშორისო სტანდარტები',
                img: menu1,
                href: 'https://proservice.ge/uploads/conetnts/domain_regulation_amendments.geo.2020.01.10_v3.0.pdf',
                soon: false,
            },
            {
                name: 'პერსონალურ მონაცემთა დაცვის პოლიტიკა',
                name_en: 'პერსონალურ მონაცემთა დაცვის პოლიტიკა',
                desc: '',
                img: menu10,
                href: 'https://proservice.ge/uploads/new_files/privacy__policy_2020_geo.pdf',
                soon: false,
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
                href: 'https://billing.proservice.ge/index.php?rp=/store/virtual-ds',
                soon: false,
            },
            {
                name: 'VPS Lite',
                name_en: 'VPS Lite',
                desc: 'ბიუჯეტური Linux/Windows სერვერი HDD-ზე',
                img: menu12,
                href: 'https://billing.proservice.ge/index.php?rp=/store/virtual-ds',
                soon: false,
            },
            {
                name: 'აპლიკაცია როგორც სერვისი',
                name_en: 'აპლიკაცია როგორც სერვისი',
                desc: 'Docker სისტემაზე დაფუძნებული სერვისი',
                img: menu13,
                href: '',
                soon: false,
            },
            {
                name: 'მარტივი გამოყოფილი სივრცე',
                name_en: 'მარტივი გამოყოფილი სივრცე',
                desc: 'სივრცე ნებისმიერი ამოცანისთვის',
                img: menu14,
                href: '',
                soon: false,
            },
            {
                name: 'Kubernetes',
                name_en: 'Kubernetes',
                desc: 'კონტეინერული აპლიკაციების დანერგვა',
                img: menu15,
                href: '',
                soon: true,
            },
            {
                name: 'საჯარო Cloud',
                name_en: 'საჯარო Cloud',
                desc: 'პროექტი მაღალი წარმადობის Cloud ინფრასტრუქტურაში',
                img: menu16,
                href: '',
                soon: true,
            },
        ],
        interestingLinks: [
            {
                name: 'კოლოკაცია',
                name_en: 'კოლოკაცია',
                desc: 'შენი სერვერი ჩვენს დატა ცენტრში',
                img: menu17,
                href: 'https://billing.proservice.ge/index.php?rp=/store/colocation',
                soon: false,
            },
            {
                name: 'გამოყოფილი სერვერები',
                name_en: 'გამოყოფილი სერვერები',
                desc: 'მაღალი წარმადობის რესურსები',
                img: menu18,
                href: 'https://billing.proservice.ge/index.php?rp=/store/dedicated-servers',
                soon: false,
            },
            {
                name: 'Backup სერვისი',
                name_en: 'Backup სერვისი',
                desc: 'სარეზერვო ასლების სამართავი სივრცე',
                img: menu19,
                href: '',
                soon: false,
            },
            {
                name: 'NAS',
                name_en: 'NAS',
                desc: 'ნასი ჩვენ დატა ცენტრში',
                img: menu20,
                href: '',
                soon: false,
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
    soon: boolean
}

export interface IProdMenu {
    cat_id: string,
    name: string, 
    name_en: string,
    type: string, 
    mainLinks: IMenuLinks[],
    interestingLinks?: IMenuLinks[]
}
