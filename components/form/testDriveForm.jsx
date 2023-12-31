"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "./input";
import useZustandStore from "/app/storeZustand";
import Loading from "./loading";
export default function TestDriveForm({ formID }) {
  let schema = yup.object().shape({
    name: yup
      .string()
      .typeError("Phải là chữ")
      .required("Không để trống")
      .max(40, "Nhiều nhất 40 ký tự"),
    phoneNum: yup
      .number()
      .required("Không để trống")
      .typeError("Phải là số")
      .min(10, "Ít nhất 10 chữ số"),
  });
  const cars = [
    "VF 9",
    "VF 8",
    "VF 7",
    "VF 6",
    "VF 5",
    "VF e34",
    "Xe máy điện",
  ];
  let dayTime = new Date();
  let ngay =
    dayTime.getDate() +
    "/" +
    (dayTime.getMonth() + 1) +
    "/" +
    dayTime.getFullYear();
  const setsucceedShow = useZustandStore((state) => state.setsucceedShow);
  const setFormAndInfoShow = useZustandStore(
    (state) => state.setFormAndInfoShow
  );
  const setLoading = useZustandStore((state) => state.setLoading);
  const setDialogShow = useZustandStore((state) => state.setDialogShow);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log("render lai");

  const onSubmit = (data) => {
    // console.log(JSON.stringify(data));
    setLoading();
    var urlencoded = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      urlencoded.append(key, value);
    });
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      //send mail dopost
      // data Sheet: https://docs.google.com/spreadsheets/d/1mciDcHZ51xPrO6bbh2Ygv51viTUFj8bH9LG7DDUIlNs
      // guide: https://script.gs/webhooks-for-sheets/?utm_source=webhooks-for-sheets&utm_medium=workspace-addon
      // web hook for sheets
      "https://script.google.com/macros/s/AKfycbw0-Ru-nBrd3HK6HT5cDsR3tySQlgd8HqdorPAJBd4oTwoHiTQw_8mQOjkEdAQnBDQmAw/exec?gid=0",

      requestOptions
    )
      .then((data) => {
        console.log("Success:", urlencoded);
        setLoading();
        setsucceedShow();
        setDialogShow(true);
        setFormAndInfoShow();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // reset();
  };
  const classNormal =
    " border-solid border-[1px] w-[100%] mt-[2px] p-[2px] focus:box-border box-border focus:border-[1px] rounded-[4px] text-Tnm text-key placeholder:text-Tsm ";
  const classInvalid = " border-red-600 focus:border-red-600 ";
  const classValid = " border-key ";
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="block px-[10px] "
        id={formID}
      >
        <div className="text-TmdPlus md:text-Tmd text-center ">
          {"Báo giá xe ngày " + ngay}
        </div>
        <label htmlFor={"cars" + "_" + formID} className=" ">
          Chọn xe
        </label>
        <select
          {...register("car")}
          id={"cars" + "_" + formID}
          className={classNormal + "text-key"}
        >
          {cars.map((car, i) => (
            <option key={i} value={car}>
              {car}
            </option>
          ))}
        </select>

        <Input
          register={register}
          error={errors}
          className={classNormal}
          classErrorName={classInvalid}
          classNormalName={classValid}
          label="Họ và Tên"
          id={"name"}
          required
        />

        <Input
          register={register}
          error={errors}
          label="Số điện thoại"
          id={"phoneNum"}
          required
          className={classNormal}
          classErrorName={classInvalid}
          classNormalName={classValid}
        />
        <input
          type="checkbox"
          id={"req1" + "_" + formID}
          {...register("installment")}
          value="true"
          className="min-h-[32px] min-w-[32px] "
        />
        <label htmlFor={"req1" + "_" + formID}> Tính trả góp</label>
        <br />
        <input
          type="checkbox"
          id={"req2" + "_" + formID}
          {...register("totalCost")}
          value="true"
          className="min-h-[32px] min-w-[32px] "
        />
        <label htmlFor={"req2" + "_" + formID}> Tính lăn bánh</label>
        <br />
        <textarea
          id={"request" + "_" + formID}
          {...register("request")}
          className={classNormal}
          placeholder=" Yêu cầu khác"
        ></textarea>
        <div>
          <input
            type="submit"
            id={"submit" + "_" + formID}
            value="GỬI ĐĂNG KÝ"
            className="bg-accent mt-[10px] px-[20px] py-[10px] rounded-[4px] w-[100%] cursor-pointer text-key "
          />
          <Loading />
        </div>
      </form>
    </div>
  );
}
