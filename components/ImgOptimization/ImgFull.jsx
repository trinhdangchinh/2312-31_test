import Image from "next/image";

const ImgFull = ({ ...rest }) => {
  return (
    <Image
      {...rest}
      // placeholder="blur"
      // blurDataURL={
      //   "data:image/gif;base64,R0lGODlhAQABAPAAAAKB0v///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
      // }
      //   layout="responsive"
      //   fill
      width="60"
      height="40"
      sizes="(max-width: 640px) 360px,
  (max-width: 960px) 540px,
  (max-width: 1200px) 675px,
  (max-width: 1920px) 1080px,
  1200px"
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
};

export default ImgFull;
