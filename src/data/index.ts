export const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  import { chip, dashboard, dashboard2, micro, safe, shield } from '../assets/icons';

  export const services = [
    {
        title: "Optimal Performance",
        description: "Our servers are optimized to deliver maximum speed and efficiency for your projects.",
        icon: dashboard,
    },
    {
        title: "Robust Security",
        description: "We implement advanced security measures to protect your data and ensure the integrity of your information.",
        icon: shield,
    },
    {
        title: "24/7 Support",
        description: "Our expert team is available 24/7 to assist you with all your needs.",
        icon: micro,
    },
    {
        title: "Flexible Scalability",
        description: "Our solutions grow with your business, allowing for seamless scalability.",
        icon: dashboard2,
    },
    {
        title: "Easy Integration",
        description: "We provide tools that make integrating your applications and services efficient and straightforward.",
        icon: chip,
    },
    {
        title: "Free SSL Certificates",
        description: "We offer free SSL certificates to ensure the trust and security of your visitors.",
        icon: safe,
    },
];