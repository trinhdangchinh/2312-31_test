import Link from "next/link";
import ViTime from "../components/common/vi_time";
import ImgFull from "/components/ImgOptimization/ImgFull";

function Card(props) {
  return (
    <div>
      <div className="box-shadow1 card1  ">
        <Link href={props.href} className="block " aria-label="Vào nội dung">
          <div className="img_frame aspect-[3/2] bg-dev  grid items-center ">
            <ImgFull
              className="card1__img object-contain aspect-[3/2]   "
              src={props.src ? props.src : "/"}
              alt={props.title ? props.title : "Tiêu đề đang cập nhật"}
            />
          </div>
          <div className="card1__text p-[16px] pb-[30px] relative h-max border-b-[10px] border-transparent">
            <h3 className=" card1-heading text-Tnm font-[450] mb-[8px] line-clamp-2 ">
              {props.title ? props.title : "Tiêu đề đang cập nhật"}
            </h3>

            <div className="  ">
              <div className="home__news-desc text-Tsm my-[8px] line-clamp-4">
                {props.excerpt ? props.excerpt : "Nội dung đang cập nhật"}
              </div>
            </div>
            <div className="home__news-date text-Tnm  border-t absolute bottom-0 ">
              {props.date ? (
                <ViTime dateString={props.date} />
              ) : (
                "Ngày đang cập nhật"
              )}
            </div>
            {/* <div>{children}</div> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
