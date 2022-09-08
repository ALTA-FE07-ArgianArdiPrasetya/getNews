import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import NavigationBar from "../components/NavigationBar";

const MoreDetails = () => {
  const router = useRouter();
  return (
    <>
      <NavigationBar />
      <div className=" marginTop p-2">
        <div className="post mx-auto d-flex flex-wrap flex-sm-nowrap border border-dark">
          <div className="img-thumb ">
            <img
              width={400}
              height={400}
              layout="responsive"
              src={router.query.img}
              alt={router.query.title}
            />
          </div>
          <div className=" w-100">
            <p className=" fw-bold"> {router.query.title}</p>
            <p className=" "> Author: {router.query.author} </p>
            <p>Publish on {router.query.date}</p>
            <p>{router.query.content}</p>
            <a href={router.query.readMoreUrl}> Read more...</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreDetails;
