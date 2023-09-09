import { CgWebsite } from 'react-icons/cg';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithubAlt, FaXTwitter } from 'react-icons/fa6';


interface ISocialMediaProps {
    link: string;
    icon: JSX.Element;
}

const SocialMediaButton = (props: ISocialMediaProps): JSX.Element => {
    return (
        <a href={props.link} target='__blank'>
            {props.icon}
        </a>
    )
}

export default function FooterComponent(): JSX.Element {
    return (
        <footer className="m-4 border-t-[2px] border-secondary text-secondary flex flex-wrap items-center justify-between py-2 gap-4">
            <section className="text-lg md:text-md sm:text-sm font-semibold">Developed by Abhijith Ganesh © {new Date().getFullYear()}</section>
            <section className='flex items-center gap-4 text-2xl'>
                <SocialMediaButton icon={<FaLinkedinIn />} link="https://linkedin.com/in/abhijithganesh14/"/>
                <SocialMediaButton icon={<FaXTwitter />} link="https://x.com/GaneshABhijith"/>
                <SocialMediaButton icon={<FaGithubAlt />} link="https://github.com/AbhijithGanesh/"/>
                <SocialMediaButton icon={<CgWebsite/>} link="https://abhijithganesh.com/"/>
            </section>
        </footer>
    );
}
