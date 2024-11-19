interface VideoProps {
    src: string
}

export const Video = ({ src }: VideoProps) => {
    return <iframe
        width="100%"
        height="315"
        src={src}
        title="YouTube video player"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
    >
    </iframe>
}