import React, { useState } from "react";

const Demo = () => {
  const [image, setImage] = useState();
  const [progressBar, setProgressBar] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleFile = (event) => {
    setLoading(true);

    const file = event.target.files[0];
    const formdata = new FormData();
    setImage(URL.createObjectURL(file));

    axios
      .post("url", formdata, {
        Headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (event) => {
          console.log(event);
          setProgressBar(Math.round(100 * event.loaded) / event.total);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        },
      })
      .then((res) => {
        setImage(URL.createObjectURL(file));
        setLoading(false);
      })
      .catch((err) => console.log(err));
    console.log(loading);
  };
  return (
    <div>
      <input type="file" onChange={handleFile} />
      <br />

      <div className="mt-10">
        {loading && "loading-----"}
      </div>
      <img className=" w-full h-full " src={image} alt="login image" />

      <img
        className="hidden h-screen lg:block object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbitzb1zWiYHiT38T8ExJb5TT2Rcnk1uH3-efuVGSHEfIQfpUDdJ9-b8wdiQjqJc9fq5w&usqp=CAU"
        alt="login image"
      />
    </div>
  );
};

export default Demo;
