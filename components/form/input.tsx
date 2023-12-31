export default function Input(props) {
  return (
    <div className="my-[5px]">
      <div className="flex justify-between items-end">
        <label htmlFor={props.id} className=" ">
          {props.label}{" "}
          <span className="text-prim  text-Tsm align-top ">
            {props.required ? "(*)" : ""}
          </span>
        </label>
        <span className="text-red-600  text-Tsm  ">
          <>{props.error[props.id]?.message}</>
        </span>
      </div>
      <div>
        <input
          id={props.id}
          placeholder={"Nhập " + props.label}
          className={
            props.className +
            (props.error[props.id]
              ? props.classErrorName
              : props.classNormalName)
          }
          {...props.register(props.id, props.required)}
        />
      </div>
    </div>
  );
}
