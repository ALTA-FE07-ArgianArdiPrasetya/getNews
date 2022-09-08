import React from "react";
import Image from "next/image";

const CardNews = ({ author, img, title, date }) => {
  return (
    <>
      <div className="px-3 px-sm-3 px-lg-0">
        <div className="post mx-auto d-flex flex-wrap flex-sm-nowrap border border-dark">
          <div className="img-thumb ">
            <img
              width={400}
              height={400}
              layout="responsive"
              src={img}
              alt={title}
            />
          </div>
          <div className=" w-100">
            <p className=" fw-bold"> {title}</p>
            <p className=" "> Author: {author} </p>
            <p>Publish on {date}</p>
            <div className="w-100 text-end">
              <button className="details " onClick={() => onUpdate(dataInput)}>
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardNews;
