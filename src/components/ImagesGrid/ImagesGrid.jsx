const ImagesGrid = () => {
  return (
    <div className="my-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
      <div className="">
        <img src="/images/photo-of-nerdearla.jpeg" alt="" className="rounded-lg" />
      </div>
    
      <div>
        <img src="/images/photo-with-midu.jpeg" alt="" className="rounded-lg" />
      </div>
    </div>
  );
};

export default ImagesGrid;
