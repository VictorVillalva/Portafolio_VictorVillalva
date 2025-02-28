interface IconProps {
    svgProps: React.SVGProps<SVGSVGElement>;
}

function X({svgProps}:IconProps) {
    return (
        <svg {...svgProps} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9027 9.21502L19.348 0.560547H17.5836L11.1191 8.07531L5.95565 0.560547H0L7.80787 11.9241L0 21H1.76433L8.59111 13.0638L14.0444 21H20L11.9019 9.21502H11.9027ZM9.48595 12.0242L8.69494 10.8927L2.4 1.8887H5.11027L10.1903 9.15493L10.9813 10.2865L17.5845 19.7319H14.8742L9.48595 12.0242Z" fill="currentColor"/>
        </svg>
    );
}

export default X;