import React from "react";

const PictureAndDots = props => {
  const { pic } = props;

  console.log(pic);
  return   (
    <div>
     <div className></div>
    {pic}
        <div></div>
    </div>
    )
};

export default PictureAndDots;
