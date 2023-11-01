import Image from "next/image";
const ImagesGrid = () => {
  return (
    <div className="my-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
      <div className="">
        <Image
          src="/images/photo-of-nerdearla.jpeg"
          alt=""
          className="rounded-lg"
          width={500}
          height={500}
        />
      </div>

      <div>
        <Image
          src="/images/photo-with-midu.jpeg"
          alt=""
          className="rounded-lg"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default ImagesGrid;
