import Image from "next/image"

type propsType = {
    width: number,
    height: number,
    alt: string,
    src: string
}

export default function ImgContainer({ width, height, src, alt }: propsType) {
    return (
        <div>
            <Image
                className="mb-4"
                src={src}
                width={width}
                height={height}
                alt={alt}
            />
        </div>
    )
}