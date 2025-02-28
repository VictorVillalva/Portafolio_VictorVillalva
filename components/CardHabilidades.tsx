import { Particles } from "./magicui/particles";
import { ShineBorder } from "./magicui/shine-border";

interface CardHabilidadesProps {
    title: string;
    text: string;
}

export default function CardHabilidades({ title, text }: CardHabilidadesProps) {
    return (
        <>
            <ShineBorder
                    className=" w-auto lg:w-[400px] xl:w-[504px] flex flex-col bg-[#171717] gap-4 px-4 pb-8 text-center rounded-[8px]"
                    color={["#00507D", "#FFFFFF", "#006BA6"]}
                    borderWidth={2}
            >
                <h3 className="font-semibold text-[32px] leading-none">{title}</h3>
                <p>{text}</p>
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={100}
                    ease={80}
                    color="#464646"
                    refresh
                />
            </ShineBorder>
        </>
    )
}
