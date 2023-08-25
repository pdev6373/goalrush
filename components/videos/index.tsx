import Image from "next/image";
import { VideoType } from "@/types";
import { Text, Wrapper } from "..";
import Link from "next/link";

export default function Videos({ thumbnail, date, title, route }: VideoType) {
  return (
    <Link href={route}>
      <Wrapper noBackground gap={10}>
        <>
          <Image
            src={thumbnail}
            alt="video thumbnail"
            width={334}
            height={218}
          />
          <Text size={14} type="body" variation="main-300" weight="600">
            {date}
          </Text>
          <Text size={18} type="heading" variation="main" weight="600">
            {title}
          </Text>
        </>
      </Wrapper>
    </Link>
  );
}
