function HomeCardItem(props) {
  return (
    <div className="card-tinh-nang card1 box-shadow1 relative translate-y-[-50%] top-[50%]">
      <a href={props.href}>
        <div className="card1__img ">
          <div className="card1__img-icon box-j w-[60px] h-[60px] text-prim translate-x-[-50%] left-[50%]  relative">
            {props.svg}
          </div>
        </div>
        <div className="card1__text boxtext-v text-Tnm translate-x-[-50%] left-[50%] relative inline-block mt-[5%] ">
          <span className="">{props.text}</span>
        </div>
      </a>
    </div>
  );
}

export default HomeCardItem;
