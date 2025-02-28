
interface LinkIconProps {
    href: string;
    icon: React.ReactNode;
    altText: string;
}

const LinkIcon: React.FC<LinkIconProps> = ({ href, icon, altText }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={altText} className="cursor-pointer px-4 py-4 hover:bg-[#2E2E2E] rounded-full">
            {icon}
        </a>
    );
};

export default LinkIcon;