import React, { useEffect, useState } from "react";
import { Rating, Avatar } from "@mui/material";
import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import { IReview } from "../user-review/UserReview";
import "./Review.css";

const RootStyle = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));
const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  autoplay: true,

  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "white",
  },
});

const Review = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    fetch("https://evening-peak-31569.herokuapp.com/api/v1/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.result);
      });
  }, []);

  return (
    <RootStyle className="container mb-for-r">
      <div className="review-bg">
        <p className="text-center fw-bold">Client Testimonials</p>
        <h3 className="text-center mb-4 ">What our customers are saying.</h3>
        <hr className="hr-re mx-auto " />

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="row re-dot p-5 d-flex">
              <div className="d-flex col-12 col-lg-6">
                {review.img ? (
                  <img
                    className="rounded-circle img-fluid border-rev "
                    src={review?.img}
                    alt=""
                  />
                ) : (
                  <Avatar sx={{ width: 110, height: 110 }} />
                )}

                <div className="my-auto mx-4">
                  <h6>{review?.name}</h6>
                  <p> Software Engineer</p>
                  <StyledRating name="rating" value={3} readOnly size="small" />
                </div>
              </div>
              <div className="col-12 col-lg-6 mt-4">
                <p className=" my-auto">“{review?.desc}”</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </RootStyle>
  );
};

export default Review;
