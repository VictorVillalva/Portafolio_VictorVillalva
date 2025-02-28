import { ShimmerButton } from "./magicui/shimmer-button";

interface ButtonProps {
    text: string;
    email: string;
    subject?: string;
    body?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function ButtonEmail({ 
    text, 
    email,
    subject="Consulta desde tu sitio web",
    body="Hola, me gustaría contactarte respecto a...",
    className="",}: ButtonProps) {

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        const handleClick = () => {
            window.location.href = mailtoLink;
        };
        
    return (
            <>
                <ShimmerButton 
                    className="shadow-md" 
                    background="#00253A"
                    onClick={handleClick}
                >
                    <span className={`whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg ${className}`}>
                        {text}
                    </span>
                </ShimmerButton>
            </>
    )
}
